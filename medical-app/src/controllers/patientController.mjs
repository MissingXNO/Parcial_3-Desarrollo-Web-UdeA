import pool from '../models/db.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class PatientController {
  static async login(req, res) {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM patient WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30m' });

    return res.json({ token });
  }

  static async getAppointments(req, res) {
    const { patientId } = req.user;
    const { date } = req.query;

    let query = 'SELECT * FROM medicalappointment WHERE patient_id = $1';
    const params = [patientId];

    if (date) {
      query += ' AND date = $2';
      params.push(date);
    }

    const result = await pool.query(query, params);

    return res.json(result.rows);
  }

  static async createAppointment(req, res) {
    const { patientId } = req.user;
    const { doctorId, date, hour } = req.body;

    const result = await pool.query(
      'INSERT INTO medicalappointment (patient_id, doctor_id, date, hour) VALUES ($1, $2, $3, $4) RETURNING *',
      [patientId, doctorId, date, hour]
    );

    return res.status(201).json(result.rows[0]);
  }

  static async updateAppointment(req, res) {
    const { appointmentId } = req.params;
    const { doctorId, date, hour } = req.body;

    const result = await pool.query(
      'UPDATE medicalappointment SET doctor_id = $1, date = $2, hour = $3 WHERE id = $4 RETURNING *',
      [doctorId, date, hour, appointmentId]
    );

    return res.json(result.rows[0]);
  }

  static async deleteAppointment(req, res) {
    const { appointmentId } = req.params;

    await pool.query('DELETE FROM medicalappointment WHERE id = $1', [appointmentId]);

    return res.status(204).send();
  }
}

export default PatientController;
