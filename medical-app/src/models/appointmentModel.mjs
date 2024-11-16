import pool from './db.mjs';

const createAppointmentQuery = `
  INSERT INTO medicalappointment (date, hour, patient_id, doctor_id)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`;

const findByPatientIdQuery = `
  SELECT ma.*, d.name AS doctor_name, s.name AS specialty
  FROM medicalappointment ma
  INNER JOIN doctor d ON ma.doctor_id = d.id
  INNER JOIN specialty s ON d.specialty_id = s.id
  WHERE ma.patient_id = $1;
`;

const findByDoctorAndDateQuery = `
  SELECT * FROM medicalappointment
  WHERE doctor_id = $1 AND date = $2 AND hour = $3;
`;

class AppointmentModel {
  static async create({ date, hour, patientId, doctorId }) {
    try {
      const result = await pool.query(createAppointmentQuery, [date, hour, patientId, doctorId]);
      return result.rows[0];
    } catch (error) {
      console.error('Database Query Error:', error.message);
      throw error;
    }
  }

  static async findByPatientId(patientId) {
    try {
      const result = await pool.query(findByPatientIdQuery, [patientId]);
      return result.rows;
    } catch (error) {
      console.error('Database Query Error:', error.message);
      throw error;
    }
  }

  static async findByDoctorAndDate(doctorId, date, hour) {
    try {
      const result = await pool.query(findByDoctorAndDateQuery, [doctorId, date, hour]);
      return result.rows[0];
    } catch (error) {
      console.error('Database Query Error:', error.message);
      throw error;
    }
  }
}

export default AppointmentModel;
