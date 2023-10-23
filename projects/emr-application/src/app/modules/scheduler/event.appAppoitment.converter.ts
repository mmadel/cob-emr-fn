
import { CalendarEvent } from 'calendar-utils';
import * as moment from 'moment';
import { Appointment } from './models/appointment';
import { AppointmentMetaData } from './models/appointment.meta.data';
export class EventToAppAppoitmentConverter {
    public convert(event: CalendarEvent, optionalAppointment?: Appointment): Appointment {
        var appointment: Appointment = new Appointment();
        optionalAppointment === undefined ? appointment = new Appointment() : appointment = optionalAppointment;
        appointment.startDate = moment(event.start).local().unix();
        appointment.endDate = moment(event.end).local().unix()
        var metaData: AppointmentMetaData = new AppointmentMetaData();
        metaData.id = appointment.metaData !== undefined ? appointment.metaData.id : null;
        metaData.primaryColor = event.color.primary
        metaData.secondaryColor = event.color.secondary
        metaData.title = event.title;
        metaData.draggable = event.draggable;
        metaData.resizableBeforeStart = event.resizable.beforeStart;
        metaData.resizableAfterEnd = event.resizable.afterEnd;
        appointment.metaData = metaData;
        appointment.id = event.id !== undefined ? Number(event.id) : undefined;
        return appointment;
    }

    public convertToEvent(appointment: Appointment) {

        var event: CalendarEvent = {
            id: appointment.id,
            start: new Date(moment.unix(appointment.startDate).toISOString()),
            end: new Date(moment.unix(appointment.endDate).toISOString()),
            title: appointment.title,
            draggable: appointment.metaData.draggable,
            resizable: {
                beforeStart: appointment.metaData.resizableBeforeStart,
                afterEnd: appointment.metaData.resizableAfterEnd,
            },
            color: {
                primary: appointment.appointmentType === undefined ? undefined : appointment.appointmentType.color,
                secondary: appointment.appointmentType === undefined ? undefined : appointment.appointmentType.color
            },
            meta: {
                'status': appointment.appointmentStatus, 
                'type' : appointment.appointmentType.name,
                'doctor' : appointment.doctorUUID
            }
        }

        return event
    }

}