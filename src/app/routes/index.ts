import express from 'express';
import { CustomerRoutes } from '../modules/Customer/customer.route';
import { BikeRoutes } from '../modules/Bike/bike.route';
import { RecordRoutes } from '../modules/ServiceRecord/serviceRecord.route';

const router = express.Router();

const moduleRoutes = [
    {
        path:'/customers',
        route:CustomerRoutes
    },
    {
        path:'/bikes',
        route:BikeRoutes
    },
    {
        path:'/services',
        route:RecordRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;