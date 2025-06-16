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

export const RecordController = {
    createService,
    getAllServiceFromDB
}