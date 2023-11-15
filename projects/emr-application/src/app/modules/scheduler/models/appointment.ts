import { AppointmentMetaData } from './appointment.meta.data';
import { AppointmentType } from './appointment.type';
import { AppointmentRepeat } from './appointment.repeat';
import { AppointementStatus } from './appointment.status';
import { Patient } from '../../patient/models/patient';

export class Appointment {
    id: number;
    clinicId: number;
    doctorUUID: string;
    isAllUsers: boolean;
    patient: Patient;
    patientCaseId: number;
    startDate: number;
    endDate: number;
    title: string;
    note: string;
    repeatId: number;
    appointmentType: AppointmentType = new AppointmentType();
    metaData: AppointmentMetaData;
    repeat: AppointmentRepeat;
    appointmentStatus: string;
    statusHistory: AppointementStatus[]
}