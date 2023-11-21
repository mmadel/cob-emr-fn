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
  appointmentStatus: string;
  appointmentType: string;
  event: CalendarEvent;

  constructor(private appointmentEmittingService: AppointmentEmittingService) { }

  ngOnInit(): void {
    this.appointmentEmittingService.event$
      .subscribe((event: CalendarEvent) => {
        console.log(JSON.stringify(event))
        this.event = event;
        this.patientName = event.title.split(':')[0]
        this.pateintCase = event.title.split(':')[1]
        this.appointmentStartDate = event.start
        this.appointmentEndDate = event.end;
        this.appointmentStatus = event.meta.status
        this.appointmentType = event.meta.type
      })
  }
  editAppointmentAction(event:any) {
    this.appointmentEmittingService.selectedAppointment$.next(Number(this.event.id))
    this.changeVisibility.emit("edit");
  }
  changeStatusAppointmentAction() {
    this.appointmentEmittingService.selectedAppointment$.next(Number(this.event.id))
    this.changeVisibility.emit("status");
  }
  deleteAppointmentAction() {
    this.changeVisibility.emit("delete");
  }

}
