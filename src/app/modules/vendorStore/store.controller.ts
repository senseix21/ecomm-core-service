import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StoreSerivce } from "./store.service";

const create = catchAsync(async (req, res) => {
    const result = await StoreSerivce.create(req.body)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Store created successfully.",
        data: result
    });
});

export const StoreController = {
    create
}