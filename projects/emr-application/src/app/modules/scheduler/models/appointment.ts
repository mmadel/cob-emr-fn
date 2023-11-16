import { AppointmentMetaData } from './appointment.meta.data';
import { AppointmentType } from './appointment.type';
import { AppointmentRepeat } from './appointment.repeat';
import { AppointementStatus } from './appointment.status';
import { Patient } from '../../patient/models/patient';
import { PatientCase } from '../../patient/models/case/patient.case';
import { User } from '../../administration/model/user/user';

export class Appointment {
    id: number;
    clinicId: number;
    isAllUsers: boolean;
    patient: Patient;
    patientCase: PatientCase = null;;
    therapy: User = null;
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