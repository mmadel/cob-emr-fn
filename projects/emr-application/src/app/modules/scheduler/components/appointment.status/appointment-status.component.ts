import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { ToastrService } from 'ngx-toastr';
import { filter, switchMap, tap } from 'rxjs';
import { Appointment } from '../../models/appointment';
import { AppointmentEmittingService } from '../../service/appointment-emitting.service';
import { AppointmentEventConverterService } from '../../service/appointment-event-converter.service';
import { AppointmentService } from '../../service/appointment.service';

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrls: ['./appointment-status.component.css']
})
export class AppointmentStatusComponent implements OnInit {
  @Output() changeVisibility = new EventEmitter<string>();
  event: CalendarEvent;
  statusDisabled: boolean = true;
  appointment: Appointment
  constructor(private appointmentEmittingService: AppointmentEmittingService
    , private appointmentService: AppointmentService
    , private toastr: ToastrService
    , private appointmentEventConverterService: AppointmentEventConverterService) { }

  ngOnInit(): void {
    this.appointmentEmittingService.selectedAppointment$.pipe(
      filter((appointmentId) => appointmentId !== null),
      switchMap((appointmentId) => this.appointmentService.retrieveAppointment(appointmentId))
    ).subscribe((result) => {
      this.appointment = result
    })
  }
  onConfirmed(): void {
    this.updateAppointmentStatus('Confirmed')
  }
  onCheckin(): void {
    this.updateAppointmentStatus('CheckIn')
  }
  onCheckout(): void {
    this.updateAppointmentStatus('Checkout')
  }
  private updateAppointmentStatus(status: string) {
    this.appointment.appointmentStatus = status;
    this.appointmentService.createAppointment(this.appointment)
    .subscribe(() => {
      this.toastr.success('Appointment Status updated to ' + status);
      // var newEvent: CalendarEvent = this.appointmentEventConverterService.convertToEvent(result);
      // this.appointmentEmittingService.event$.next(newEvent);
      this.changeVisibility.emit('close');
    })

  }
}
