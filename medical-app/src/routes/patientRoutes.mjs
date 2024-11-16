import { Router } from 'express';
import PatientController from '../controllers/patientController.mjs';
import authMiddleware from '../middlewares/authMiddleware.mjs'; // Middleware de autenticación

const router = Router();

// Ejemplo de una ruta que utiliza authMiddleware y un controlador
router.get('/:id', authMiddleware, PatientController.getPatientById);
router.post('/', authMiddleware, PatientController.createPatient);

export default router;
