import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import PatientModel from '../models/patientModel.mjs';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

export default class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    const patient = await PatientModel.findByEmail(email);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: patient.id, role: 'patient' }, secret, { expiresIn: '30m' });
    res.json({ token });
  }
}
