import express from 'express';
import authRoutes from './routes/authRoutes.mjs'; // Rutas de autenticación
import patientRoutes from './routes/patientRoutes.mjs';
import doctorRoutes from './routes/doctorRoutes.mjs';

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api/patient', patientRoutes); // Rutas de paciente
app.use('/api/doctor', doctorRoutes); // Rutas de doctor

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
