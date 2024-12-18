import { Router } from 'express';
import PatientController from '../controllers/patientController.mjs';
import authMiddleware from '../middlewares/authMiddleware.mjs';

const router = Router();

// Ruta para obtener citas de un paciente
router.get('/appointment', authMiddleware, PatientController.getAppointments);

// Endpoint para agendar citas
router.post('/appointment', authMiddleware, PatientController.createAppointment);


export default router;
