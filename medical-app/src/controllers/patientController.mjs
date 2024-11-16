import PatientService from '../services/patientService.mjs';
import AppointmentService from '../services/appointmentService.mjs';

class PatientController {
  // Obtener citas de un paciente
  static async getAppointments(req, res) {
    try {
      const patientId = req.user.id; // ID del paciente extraído del token JWT
      const appointments = await AppointmentService.getAppointmentsByPatient(patientId);

      res.status(200).json(appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error.message);
      res.status(400).json({ message: error.message });
    }
  }

  // Agendar una nueva cita
  static async createAppointment(req, res) {
    try {
      const patientId = req.user.id; // ID del paciente extraído del token JWT
      const appointmentData = req.body;

      const appointment = await AppointmentService.createAppointment(patientId, appointmentData);
      res.status(201).json(appointment);
    } catch (error) {
      console.error('Error creating appointment:', error.message);
      res.status(400).json({ message: error.message });
    }
  }
}

export default PatientController;
