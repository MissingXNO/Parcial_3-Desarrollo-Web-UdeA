import PatientModel from '../models/patientModel.mjs';

class PatientController {
  static async getPatientById(req, res) {
    const { id } = req.params;
    try {
      const patient = await PatientModel.findById(id);
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
      res.json(patient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createPatient(req, res) {
    const { name, age, email, password } = req.body;
    try {
      const newPatient = await PatientModel.create(name, age, email, password);
      res.status(201).json(newPatient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default PatientController;
