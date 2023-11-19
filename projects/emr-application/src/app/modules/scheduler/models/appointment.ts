import { AppointmentMetaData } from './appointment.meta.data';
import { AppointmentType } from './appointment.type';
import { AppointmentRepeat } from './appointment.repeat';
import { AppointementStatus } from './appointment.status';
import { Patient } from '../../patient/models/patient';
import { PatientCase } from '../../patient/models/case/patient.case';
import { User } from '../../administration/model/user/user';
import { SchedulerType } from '../../common/models/enums/scheduler/scheduler.type';
import { AppointmentDate } from './appointment.date';

export class Appointment {
    id: number;
    clinicId: number;
    isAllUsers: boolean;
    patient: Patient;
    patientId: number;
    patientCase: PatientCase = null;
    patientCaseId: number;
    therapy: User = null;
    appointmentDate: AppointmentDate = {}
    startDate:number;
    endDate:number
    title: string;
    note: string;
    repeatId: number;
    appointmentType: string | null = null;
    appointmentRepetition: string | null = null;
    repeat: AppointmentRepeat;
    appointmentStatus: string;
    statusHistory: AppointementStatus[]
    public constructTitle(): string {
        return this.patient.fullName + ':' + this.patientCase.title
    }
}