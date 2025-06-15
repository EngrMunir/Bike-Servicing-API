import { PrismaClient } from "../../../../generated/prisma"
import { TBike } from "./bike.interface";

const prisma = new PrismaClient();
const createBike = async(data:TBike)=>{
    await prisma.customer.findUniqueOrThrow({
        where:{
            customerId: data.customerId
        }
    })
    const result = await prisma.bike.create({
        data
    });
    return result;
}

const getAllBikeFromDB = async()=>{
    const result = await prisma.bike.findMany();
    return result;
}

const getBikeById = async(id:string)=>{
    const result = await prisma.bike.findUnique({
        where:{
            bikeId:id
        }
    });
    return result;
};

export const BikeService ={
    createBike,
    getAllBikeFromDB,
    getBikeById
}