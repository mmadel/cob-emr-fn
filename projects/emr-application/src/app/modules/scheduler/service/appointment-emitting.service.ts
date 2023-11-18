import { Injectable } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentEmittingService {
  public selectedAppointment$: BehaviorSubject<CalendarEvent | null> = new BehaviorSubject<CalendarEvent | null>(null);
  constructor() { }
}
