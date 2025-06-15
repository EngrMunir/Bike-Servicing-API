import { Request, Response } from "express";
import { BikeService } from "./bike.service";

const createBike = async(req:Request, res:Response) =>{
    console.log(req.body);
    try {
        const result = await BikeService.createBike(req.body);
        
        res.status(200).json({
            success:true,
            message:"Bike added successfully",
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
const getAllBikeFromDB = async(req:Request, res:Response) =>{
    try {
        const result = await BikeService.getAllBikeFromDB();
        
        res.status(200).json({
            success:true,
            message:"Bikes fetched successfully",
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
const getBikeById = async(req:Request, res:Response) =>{
    const { id } = req.params;
    try {
        const result = await BikeService.getBikeById(id);
        
        res.status(200).json({
            success:true,
            message:"Bike fetched successfully",
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

export const BikeController = {
    createBike,
    getAllBikeFromDB,
    getBikeById
}