import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-actions',
  templateUrl: './appointment-actions.component.html',
  styleUrls: ['./appointment-actions.component.css']
})
export class AppointmentActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editAppointmentAction() { }
  changeStatusAppointmentAction() { }
  deleteAppointmentAction() { }
}
