import express, { Application, NextFunction, Request, Response } from "express";
import cors from 'cors';
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app:Application = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req:Request, res:Response) =>{
    res.send({
        Message:"Bike Servicing Server is running..."
    })
});

app.use('/api',router);
app.use(globalErrorHandler);

export default app;