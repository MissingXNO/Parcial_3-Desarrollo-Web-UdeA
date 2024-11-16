import express from 'express';
import patientRoutes from './routes/patientRoutes.mjs';
import doctorRoutes from './routes/doctorRoutes.mjs';

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api/auth', patientRoutes);
app.use('/api/doctor', doctorRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
