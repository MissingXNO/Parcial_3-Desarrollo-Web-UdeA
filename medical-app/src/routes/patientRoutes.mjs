import express from 'express';
import PatientController from '../controllers/patientController.mjs';
import authMiddleware from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.post('/login', PatientController.login);

router.use(authMiddleware);

router.route('/appointment')
  .get(PatientController.getAppointments)
  .post(PatientController.createAppointment);

router.route('/appointment/:appointmentId')
  .put(PatientController.updateAppointment)
  .delete(PatientController.deleteAppointment);

export default router;
