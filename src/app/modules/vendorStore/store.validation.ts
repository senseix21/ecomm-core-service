import { z } from "zod";

const storeValidationZodSchema = z.object({
    body: z.object({
        storeName: z.string({
            required_error: "Store name required"
        }),
        description: z.string({
            required_error: "Store description required"
        }),
        userId: z.string({
            required_error: "User id required"
        }),
    }),
});

export const StoreValidation = {
    storeValidationZodSchema
}