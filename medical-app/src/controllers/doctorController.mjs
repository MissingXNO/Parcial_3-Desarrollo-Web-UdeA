import pool from '../models/db.mjs';

class DoctorController {
  static async getDoctorById(req, res) {
    try {
      const { doctorId } = req.params;
      const result = await pool.query('SELECT * FROM doctor WHERE id = $1', [doctorId]);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Doctor not found' });
      }

      return res.json(result.rows[0]);
    } catch (error) {
      console.error(`Error getting doctor: ${error.message}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default DoctorController;
