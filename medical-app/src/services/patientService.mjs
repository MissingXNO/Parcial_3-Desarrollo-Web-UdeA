import AppointmentModel from '../models/appointmentModel.mjs';

export default class PatientService {
  // Obtener citas de un paciente
  static async getAppointments(patientId, date) {
    if (date) {
      return await AppointmentModel.findByPatientIdAndDate(patientId, date);
    } else {
      return await AppointmentModel.findByPatientId(patientId);
    }
  }

  // Agendar una nueva cita
  static async scheduleAppointment({ patientId, doctorId, date, time }) {
    return await AppointmentModel.create({
      patientId,
      doctorId,
      date,
      time,
    });
  }
}
