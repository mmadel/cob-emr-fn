import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-actions',
  templateUrl: './appointment-actions.component.html',
  styleUrls: ['./appointment-actions.component.css']
})
export class AppointmentActionsComponent implements OnInit {
  @Output() changeVisibility = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
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
