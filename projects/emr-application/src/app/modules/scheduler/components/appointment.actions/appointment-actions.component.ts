import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { filter, Observable, tap } from 'rxjs';
import { AppointmentEmittingService } from '../../service/appointment-emitting.service';

@Component({
  selector: 'app-appointment-actions',
  templateUrl: './appointment-actions.component.html',
  styleUrls: ['./appointment-actions.component.css']
})
export class AppointmentActionsComponent implements OnInit {
  @Output() changeVisibility = new EventEmitter<string>();
  patientName: string
  pateintCase: string
  appointmentStartDate: Date;
  appointmentEndDate: Date;

  constructor(private appointmentEmittingService: AppointmentEmittingService) { }

  ngOnInit(): void {
    this.appointmentEmittingService.selectedAppointment$
      .subscribe((event: CalendarEvent) => {
        this.patientName = event.title.split(':')[0]
        this.pateintCase = event.title.split(':')[1]
        this.appointmentStartDate = event.start
        this.appointmentEndDate = event.end;
      })
  }
  editAppointmentAction() {
    this.changeVisibility.emit("edit");
  }
  changeStatusAppointmentAction() {
    this.changeVisibility.emit("status");
  }
  deleteAppointmentAction() {
    this.changeVisibility.emit("delete");
  }

}
