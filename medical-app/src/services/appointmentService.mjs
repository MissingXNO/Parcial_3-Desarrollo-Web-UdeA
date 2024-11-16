import AppointmentModel from '../models/appointmentModel.mjs';

export default class AppointmentService {
  static async createAppointment(patientId, data) {
    const { doctorId, date, hour } = data;

    // Verifica si ya existe una cita para el mismo doctor en la misma fecha y hora
    const existingAppointment = await AppointmentModel.findByDoctorAndDate(doctorId, date, hour);
    if (existingAppointment) {
      throw new Error('There is already an appointment for this doctor at the specified date and time');
    }

    // Crea la cita
    return await AppointmentModel.create({ date, hour, patientId, doctorId });
  }

  static async getAppointmentsByPatient(patientId) {
    return await AppointmentModel.findByPatientId(patientId);
  }
  
}
