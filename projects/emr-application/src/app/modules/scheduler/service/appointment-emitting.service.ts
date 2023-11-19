import { Injectable } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentEmittingService {
  public event$: BehaviorSubject<CalendarEvent | null> = new BehaviorSubject<CalendarEvent | null>(null);
  public selectedAppointment$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  constructor() { }
}
