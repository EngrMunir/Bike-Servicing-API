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

const getCustomerById = async(req:Request, res:Response) =>{
    const {id} = req.params;
    console.log(id);
    try {
        const result = await CustomerService.getCustomerById(id);

         res.status(200).json({
            success:true,
            message:"Customer fetched successfully",
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

const updateCustomer = async (req:Request, res:Response) =>{
    const {id} = req.params;
    try {
        const result = await CustomerService.updateCustomer(id, req.body);
        res.status(200).json({
            success:true,
            message:"Customer updated successfully",
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

const deleteCustomer = async(req:Request, res:Response) =>{
    const {id} = req.params;
    console.log(id);
    try {
         await CustomerService.deleteCustomer(id);
         res.status(200).json({
            success:true,
            message:"Customer deleted successfully",
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
    getCustomerById,
    updateCustomer,
    deleteCustomer
}