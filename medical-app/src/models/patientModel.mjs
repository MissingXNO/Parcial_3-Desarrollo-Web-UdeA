import pool from './db.mjs';

export default class PatientModel {
  static async findByEmail(email) {
    const result = await pool.query('SELECT * FROM patient WHERE email = $1', [email]);
    return result.rows[0];
  }
  
  static async findById(id) {
    const result = await pool.query('SELECT * FROM patient WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const { name, age, email, password } = data;
    const result = await pool.query(
      'INSERT INTO patient (name, age, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, age, email, password]
    );
    return result.rows[0];
  }
  
  // Otros métodos según sea necesario
}
