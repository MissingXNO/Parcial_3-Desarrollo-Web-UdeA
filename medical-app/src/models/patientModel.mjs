import pool from './db.mjs';

class PatientModel {
  static async findByEmail(email) {
    try {
      const result = await pool.query('SELECT * FROM patient WHERE email = $1', [email]);
      console.log('Query Result:', result.rows); // Log para verificar la consulta
      return result.rows[0];
    } catch (error) {
      console.error('Database Query Error:', error.message);
      throw error;
    }
  }

  // Nuevo método findById
  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM patient WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Database Query Error:', error.message);
      throw error;
    }
  }
}

export default PatientModel;
