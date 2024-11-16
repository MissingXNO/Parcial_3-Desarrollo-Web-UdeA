import pool from './db.mjs';

export default class DoctorModel {
  static async findById(id) {
    const result = await pool.query('SELECT * FROM doctor WHERE id = $1', [id]);
    return result.rows[0];
  }

  // Otros métodos según sea necesario
}
