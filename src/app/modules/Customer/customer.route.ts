import express from 'express';
import { CustomerController } from './customer.controller';
import validateRequest from '../../middleware/validateRequest';
import { customerValidationSchemas } from './customer.validation';

const router = express.Router()

router.get('/',CustomerController.getAllCustomerFromDB);
router.get('/:id',CustomerController.getCustomerById);
router.post('/',CustomerController.createCustomer);
router.patch(
    '/:id',
    validateRequest(customerValidationSchemas.update),
    CustomerController.updateCustomer);


export const CustomerRoutes = router;