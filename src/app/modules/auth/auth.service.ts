import { User } from "@prisma/client";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import { passCompare } from "../../../helpers/passCompare";
import { RedisClient } from "../../../shared/redis";
import { prisma } from "../../../utils/prisma";
import { EVENT_USER_LOGGED_IN, EVENT_USER_REGISTERED } from "./auth.constants";
import { ILoginResponse, ILoginUser, IUser } from "./auth.interface";

const signUp = async (payload: IUser): Promise<User> => {
    const result = await prisma.user.create({
        data: payload
    })
    RedisClient.publish(EVENT_USER_REGISTERED, JSON.stringify(event));
    return result;
};

const signin = async (payload: ILoginUser): Promise<ILoginResponse> => {
    const { email, password } = payload;

    const isUserExist = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });
    if (!isUserExist) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "User does not exist");
    }

    if (
        isUserExist.password &&
        !(await passCompare(password, isUserExist.password))
    ) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
    }

    //create acess and refresh token 
    const { id: userId, email: userEmail, userType: role, username } = isUserExist
    const accessToken = jwtHelpers.createToken(
        { userEmail, userId, role },
        config.jwt.secret as Secret,
        config.jwt.expires_in as string
    )

    const refreshToken = jwtHelpers.createToken(
        { userEmail, userId, role },
        config.jwt.refresh_secret as Secret,
        config.jwt.refresh_expires_in as string
    )

    RedisClient.publish(EVENT_USER_LOGGED_IN, JSON.stringify(event));

    return {
        userName: username,
        email,
        accessToken,
        refreshToken
    }
}






export const AuthService = {
    signUp,
    signin
}