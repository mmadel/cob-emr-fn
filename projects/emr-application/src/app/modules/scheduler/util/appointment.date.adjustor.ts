import * as moment from "moment";
import { Appointment } from "../models/appointment";

export class AppointmentDateAdjustor {
    public static adjust(appointment: Appointment) {
        var startDate: Date = moment(appointment.appointmentDate.startDate).toDate();
        startDate.setHours(appointment.appointmentDate.startTime.getHours())
        startDate.setMinutes(appointment.appointmentDate.startTime.getMinutes())
        appointment.startDate = moment(startDate).unix() * 1000;

        var endDate: Date = moment(appointment.appointmentDate.endDate).toDate();
        endDate.setHours(appointment.appointmentDate.endTime.getHours())
        endDate.setMinutes(appointment.appointmentDate.endTime.getMinutes())
        appointment.endDate = moment(endDate).unix() * 1000;
    }
    public static adjustwithDate(appointment: Appointment, startDate: number, endDate: number) {

    }
}