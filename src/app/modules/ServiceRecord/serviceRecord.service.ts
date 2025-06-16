import { PrismaClient } from "../../../../generated/prisma"

const prisma = new PrismaClient();

const createService = async(data:any)=>{
    const result = await prisma.serviceRecord.create({
        data
    });
    return result;
};

const getAllServiceFromDB = async()=>{
    const result = await prisma.serviceRecord.findMany();
    return result;
};

export const RecordService ={
    createService,
    getAllServiceFromDB
}