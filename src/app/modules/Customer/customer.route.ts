import express from 'express';
import { CustomerController } from './customer.controller';

const router = express.Router()

router.get('/',CustomerController.getAllCustomerFromDB);
router.get('/:id',CustomerController.getCustomerById);
router.post('/',CustomerController.createCustomer);


export const CustomerRoutes = router;