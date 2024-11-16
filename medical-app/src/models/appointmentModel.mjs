import pool from './db.mjs';

export default class AppointmentModel {
  static async findByPatientId(patientId) {
    const result = await pool.query('SELECT * FROM medicalappointment WHERE patient_id = $1', [patientId]);
    return result.rows;
  }

  static async findByDoctorId(doctorId) {
    const result = await pool.query('SELECT * FROM medicalappointment WHERE doctor_id = $1', [doctorId]);
    return result.rows;
  }

  // Otros métodos según sea necesario
}
