import AppointmentModel from '../models/appointmentModel.mjs';

class AppointmentService {
  static async createAppointment(patientId, appointmentData) {
    try {
      // Asegúrate de que el patientId esté siendo utilizado correctamente
      const appointment = await AppointmentModel.create({
        date: appointmentData.date,
        hour: appointmentData.hour,
        patientId: patientId,  // Aquí pasamos el patientId correctamente
        doctorId: appointmentData.doctorId
      });

      return appointment;
    } catch (error) {
      console.error('Error en el servicio de citas:', error.message);
      throw error;
    }
  }
}

export default AppointmentService;
