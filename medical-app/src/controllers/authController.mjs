import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import PatientModel from '../models/patientModel.mjs';

dotenv.config();
const secret = process.env.JWT_SECRET;

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      console.log('Email recibido:', email);
      console.log('Contraseña recibida:', password);

      const patient = await PatientModel.findByEmail(email);
      console.log('Resultado de la consulta patient:', patient);

      if (!patient) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Comparación directa de contraseñas en texto plano
      console.log('Contraseña guardada:', patient.password);
      if (password !== patient.password) {
        console.log('Contraseñas no coinciden');
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: patient.id, role: 'patient' }, secret, { expiresIn: '30m' });
      console.log('Token generado:', token);
      res.json({ token });
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error.message);
      res.status(500).json({ message: error.message });
    }
  }
}

export default AuthController;
