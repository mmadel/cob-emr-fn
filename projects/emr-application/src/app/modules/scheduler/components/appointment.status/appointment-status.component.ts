import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrls: ['./appointment-status.component.css']
})
export class AppointmentStatusComponent implements OnInit {
  statusDisabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onConfirmedClick(): void { }
  onCheckInClick(): void { }
  onCheckOutClick(): void { }
  onCancelClick(): void { }
  onNoShowClick(): void { }
  onCloseClick(): void { }
}
