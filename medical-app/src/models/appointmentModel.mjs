import pool from './db.mjs';

// Consultas SQL
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
  // Método para crear una cita
  static async create({ date, hour, patientId, doctorId }) {
    try {
      // Verificamos si patientId es válido
      if (!patientId) {
        throw new Error('El ID del paciente no es válido.');
      }

      // Ejecutamos la consulta de inserción
      const result = await pool.query(createAppointmentQuery, [date, hour, patientId, doctorId]);
      return result.rows[0]; // Retornamos la cita creada
    } catch (error) {
      console.error('Error al crear la cita:', error.message);
      throw error; // Propagamos el error
    }
  }

  // Método para encontrar las citas por paciente
  static async findByPatientId(patientId) {
    try {
      // Verificamos si patientId es válido
      if (!patientId) {
        throw new Error('El ID del paciente no es válido.');
      }

      // Ejecutamos la consulta para obtener las citas
      const result = await pool.query(findByPatientIdQuery, [patientId]);
      return result.rows; // Retornamos las citas encontradas
    } catch (error) {
      console.error('Error al obtener las citas del paciente:', error.message);
      throw error; // Propagamos el error
    }
  }

  // Método para encontrar una cita por doctor y fecha
  static async findByDoctorAndDate(doctorId, date, hour) {
    try {
      // Verificamos si doctorId, date y hour son válidos
      if (!doctorId || !date || !hour) {
        throw new Error('Los datos para buscar la cita son incompletos.');
      }

      // Ejecutamos la consulta de búsqueda
      const result = await pool.query(findByDoctorAndDateQuery, [doctorId, date, hour]);
      return result.rows[0]; // Retornamos la cita encontrada
    } catch (error) {
      console.error('Error al buscar la cita por doctor y fecha:', error.message);
      throw error; // Propagamos el error
    }
  }
}

export default AppointmentModel;
