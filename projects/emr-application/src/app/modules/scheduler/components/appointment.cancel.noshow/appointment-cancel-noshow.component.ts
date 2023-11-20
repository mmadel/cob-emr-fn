import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CancelNoShowReasons } from '../../../common/models/enums/scheduler/cancel.noshow';

@Component({
  selector: 'app-appointment-cancel-noshow',
  templateUrl: './appointment-cancel-noshow.component.html',
  styleUrls: ['./appointment-cancel-noshow.component.css']
})
export class AppointmentCancelNoshowComponent implements OnInit {
  @Input() type: string;
  cancelNoShowReasons = CancelNoShowReasons;
  reson: string;
  constructor() { }

  ngOnInit(): void {
  }
  onResonSelectionChange(event: any) {
    this.reson = event.target.value;
  }

}
