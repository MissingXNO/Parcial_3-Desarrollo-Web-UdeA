import AppointmentModel from '../models/appointmentModel.mjs';

export default class PatientService {
  static async getAppointments(patientId, date) {
    if (date) {
      return await AppointmentModel.findByPatientIdAndDate(patientId, date);
    } else {
      return await AppointmentModel.findByPatientId(patientId);
    }
  }

  static async createAppointment(patientId, data) {
    const { doctor_id, date, hour } = data;
    // Verificar si ya hay una cita en la misma fecha y hora para el doctor o el paciente
    const existingAppointment = await AppointmentModel.findByDoctorAndDate(doctor_id, date, hour);
    if (existingAppointment) {
      throw new Error('There is already an appointment for this doctor at the same time');
    }

    return await AppointmentModel.create({ patient_id: patientId, doctor_id, date, hour });
  }

  // Otros métodos (updateAppointment, deleteAppointment) según sea necesario
}
