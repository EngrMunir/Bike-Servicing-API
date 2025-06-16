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

const getServiceById = async(id:string)=>{
    const result = await prisma.serviceRecord.findUnique({
        where:{
            serviceId:id
        }
    });
    return result;
};

const completeService = async (id: string, completionDate?: Date) => {
  const result = await prisma.serviceRecord.update({
    where: { serviceId: id },
    data: {
      status: "done",
      completionDate: completionDate || new Date(),
    },
  });
  return result;
};



export const RecordService ={
    createService,
    getAllServiceFromDB,
    getServiceById,
    completeService
}