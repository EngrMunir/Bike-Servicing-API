import { Request, Response } from "express";
import { RecordService } from "./serviceRecord.service";

const createService = async(req:Request, res:Response)=>{
    
    try {
        const result = await RecordService.createService(req.body);

        res.status(201).json({
            success:true,
            message:"Service record created successfully",
            data:result
        })
    } catch (err) {
        res.status(500).json({
            success:true,
            message:err?.name || "Something went wrong"
        })
    }
}
const getAllServiceFromDB = async(req:Request, res:Response)=>{
    
    try {
        const result = await RecordService.getAllServiceFromDB();

        res.status(201).json({
            success:true,
            message:"Service record fetched successfully",
            data:result
        })
    } catch (err) {
        res.status(500).json({
            success:true,
            message:err?.name || "Something went wrong"
        })
    }
}

const getServiceById = async(req:Request, res:Response) =>{
    const { id } = req.params;
    try {
        const result = await RecordService.getServiceById(id);
        
        res.status(200).json({
            success:true,
            message:"Service fetched successfully",
            data:result
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err?.name || "Something went wrong",
            error:err
        })
    }
};

const completeService = async(req:Request, res:Response)=>{
    const {id} = req.params;
    const { completionDate } = req.body;
    try {
    const result = await RecordService.completeService(id, completionDate);

    res.status(200).json({
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to mark service as completed",
    });
  }
}
export const RecordController = {
    createService,
    getAllServiceFromDB,
    getServiceById,
    completeService
}