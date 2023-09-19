export type IUser = {
    username: string;
    email: string;
    password: string;
    userType: "CUSTOMER" | "VENDOR" | "ADMIN"
}

export type ILoginUser = {
    email: string;
    password: string;
}


export type ILoginResponse = {
    userName: string;
    email: string;
    accessToken: string;
    refreshToken?: string;
}

export type IRefreshTokenResponse = {
    accessToken: string;
}