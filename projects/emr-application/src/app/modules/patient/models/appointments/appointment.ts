import * as moment from "moment";
import { AppointmentStatus } from "./appointment.status";
import { StatusHistoryValue } from "./status.history.value";

export class Appointment {

    constructor(){
        this.formatDate();
    }
    id: number;
    startDate: number;
    startDate_date: string;
    endDate: number;
    endDate_date: string;
    title: string;
    note: string;
    repeatId: number;

    appointmentStatus: AppointmentStatus;

    clinicId: number;

    patientId: number;

    patientCaseId: number;

    appointmentTypeId: number;

    statusHistoryValueModel: StatusHistoryValue;

    public formatDate() {
        this.startDate_date = moment(this.startDate).format("MMM DD YYYY hh:mm a");
        this.endDate_date = moment(this.endDate).format("MMM DD YYYY hh:mm a");
    }
}