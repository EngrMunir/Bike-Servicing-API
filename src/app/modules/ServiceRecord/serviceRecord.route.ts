import express from 'express';
import { RecordController } from './serviceRecord.controller';

const router = express.Router();

router.post('/',RecordController.createService);

export const RecordRoutes = router