import express from 'express';
import DoctorController from '../controllers/doctorController.mjs';
import { authMiddleware } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.use(authMiddleware);

router.get('/:doctorId', DoctorController.getDoctorById);


export default router;
