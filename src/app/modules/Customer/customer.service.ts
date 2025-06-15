import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createCustomer =async(data:any)=>{
    const userData = {
        name: data.name,
        email:data.email,
        phone: data.phone
    }
    const result = await prisma.customer.create({
        data:userData
    })
    return result;
};
const getAllCustomerFromDB = async() =>{
    const result = await prisma.customer.findMany();
    return result;
};
export const CustomerService ={
    createCustomer,
    getAllCustomerFromDB,
}