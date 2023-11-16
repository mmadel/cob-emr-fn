import { Injectable } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import * as moment from 'moment';
import { SchedulerType } from '../../common/models/enums/scheduler/scheduler.type';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentEventConverterService {

  constructor() { }
  public convertToEvent(appointment: Appointment): CalendarEvent {
    var event: CalendarEvent = {
      id: appointment.id,
      start: appointment.appointmentDate.startTime,
      end: appointment.appointmentDate.endTime,
      title: appointment.constructTitle(),
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      color: {
        primary: SchedulerType.OK,
        secondary: SchedulerType.Warning
    },
    }
    return event;
  }

  public converttoAppointment(event: CalendarEvent, optionalAppointment?: Appointment): Appointment {
    return null;
  }
}
