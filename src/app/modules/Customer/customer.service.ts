import { Customer, PrismaClient } from "../../../../generated/prisma";

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

const getCustomerById = async(customerId:string) =>{
    const result = await prisma.customer.findUnique({
        where:{
            customerId
        }
    })
    return result;
}

const updateCustomer = async(id:string, data:Partial<Customer>)=>{
    await prisma.customer.findUniqueOrThrow({
        where:{
            customerId:id
        }
    })

    const {name, phone} = data;

    const result = await prisma.customer.update({
        where:{
            customerId:id
        },
         data: {
      ...(name && { name }),
      ...(phone && { phone }),
    },
    })
    return result;
}
export const CustomerService ={
    createCustomer,
    getAllCustomerFromDB,
    getCustomerById,
    updateCustomer
}