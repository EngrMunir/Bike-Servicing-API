import { Request, Response } from "express";
import { CustomerService } from "./customer.service";

const createCustomer = async (req:Request, res:Response) =>{
    try {
        const result = await CustomerService.createCustomer(req.body);
        res.status(200).json({
        success:true,
        message:'Customer created successfully!',
        data: result
    })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err?.name || "Something went wrong",
            error:err
        })
    }
};

const getAllCustomerFromDB = async(req:Request, res:Response) =>{
    try {
        const result = await CustomerService.getAllCustomerFromDB();

        res.status(200).json({
            success:true,
            message:"Customers fetched successfully",
            data:result

        })

    } catch (err) {
        res.status(500).json({
            success:false,
            message:err?.name || "Something went wrong",
            error:err
        })
    }
}


export const CustomerController = {
    createCustomer,
    getAllCustomerFromDB,
}