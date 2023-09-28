import { VendorStore } from "@prisma/client";
import { prisma } from "../../../utils/prisma";
import { IStore } from "./store.interface";

const create = async (payload: IStore): Promise<VendorStore> => {
    const result = prisma.vendorStore.create({
        data: payload
    });
    return result;
};


export const StoreSerivce = {
    create
}