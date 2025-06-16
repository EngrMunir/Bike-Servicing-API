import express from 'express';
import { RecordController } from './serviceRecord.controller';

const router = express.Router();

router.post('/',RecordController.createService);
router.get('/',RecordController.getAllServiceFromDB);
router.get('/:id',RecordController.getServiceById);
router.put("/:id/complete", RecordController.completeService);

export const RecordRoutes = router