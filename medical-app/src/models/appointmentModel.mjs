import pool from './db.mjs';

class AppointmentModel {
  // Consultar citas por ID de paciente
  static async findByPatientId(patientId) {
    try {
      const result = await pool.query(
        'SELECT * FROM medicalappointment WHERE patient_id = $1',
        [patientId]
      );
      return result.rows;
    } catch (error) {
      console.error('Database Query Error:', error.message);
      throw error;
    }
  }

  // Consultar citas por ID de paciente y fecha
  static async findByPatientIdAndDate(patientId, date) {
    try {
      const result = await pool.query(
        'SELECT * FROM medicalappointment WHERE patient_id = $1 AND date = $2',
        [patientId, date]
      );
      return result.rows;
    } catch (error) {
      console.error('Database Query Error:', error.message);
      throw error;
    }
  }
}

export default AppointmentModel;

