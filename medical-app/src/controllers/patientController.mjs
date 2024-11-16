import PatientService from '../services/patientService.mjs';

class PatientController {
  // Obtener citas de un paciente
  static async getAppointments(req, res) {
    const { id: patientId } = req.user; // Obtener ID del paciente del token JWT
    const { date } = req.query; // Obtener fecha de la consulta (opcional)

    try {
      const appointments = await PatientService.getAppointments(patientId, date);
      res.json(appointments); // Retorna las citas en formato JSON
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default PatientController;
