import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { AppointmentEmittingService } from '../../service/appointment-emitting.service';

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrls: ['./appointment-status.component.css']
})
export class AppointmentStatusComponent implements OnInit {
  event: CalendarEvent;
  statusDisabled: boolean = true;
  constructor(private appointmentEmittingService: AppointmentEmittingService) { }

  ngOnInit(): void {
    this.appointmentEmittingService.stautsAppointment$
      .subscribe((event) => {
        this.event = event
      })
  }

}
