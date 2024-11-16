import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import PatientModel from '../models/patientModel.mjs';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

export default class AuthService {
  static async login(email, password) {
    const patient = await PatientModel.findByEmail(email);
    if (!patient) {
      throw new Error('Patient not found');
    }

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: patient.id, role: 'patient' }, secret, { expiresIn: '30m' });
    return token;
  }
}
