import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, switchMap } from 'rxjs';
import { User } from '../../../administration/model/user/user';
import { SchedulerRepetition } from '../../../common/models/enums/scheduler/scheduler.repetition';
import { SchedulerType } from '../../../common/models/enums/scheduler/scheduler.type';
import { ClinicEmittingService } from '../../../common/service/emitting/clinic-emitting.service';
import { Patient } from '../../../patient/models/patient';
import { Appointment } from '../../models/appointment';
import { AppointmentRepeat } from '../../models/appointment.repeat';
import { AppointmentService } from '../../service/appointment.service';
import { DoctorAppointmentService } from '../../service/doctor-appointment.service';
import { PatientAppointmentService } from '../../service/patient-appointment.service';

export interface TreatingDoctor {
  doctorName,
  uuid: string;
}
export interface days {
  dayName: string,
  dayNumber: number
}
@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {
  patient$!: Observable<Patient[]>;
  therapists$!: Observable<User[]>;
  appointment: Appointment = new Appointment();
  isAllTherapists: boolean = false;
  visible = false;
  appointmentType = SchedulerType;
  appointmentRepetition = SchedulerRepetition;
  weekDays: days[] = [
    {
      dayName: 'Mon', dayNumber: 2
    },
    {
      dayName: 'Tue', dayNumber: 3
    },
    {
      dayName: 'Wed', dayNumber: 4
    },
    {
      dayName: 'Thu', dayNumber: 5
    },
    {
      dayName: 'Fri', dayNumber: 6
    },
    {
      dayName: 'Sat', dayNumber: 7
    },
    {
      dayName: 'Sun', dayNumber: 1
    },
  ]
  appointmentRepeat: AppointmentRepeat = new AppointmentRepeat();
  startBoundary: Date;
  endBoundary: Date;
  constructor(private appointmentService: AppointmentService
    , private patientAppointmentService: PatientAppointmentService
    , private clinicEmittingService: ClinicEmittingService
    , private doctorAppointmentService: DoctorAppointmentService) { }
  ngOnInit() {
    this.patient$ = this.clinicEmittingService.selectedClinic$.pipe(
      switchMap(clinicId => this.patientAppointmentService.getPateint(clinicId)),
      filter(patients => patients !== null),
      map(response => {
        return response;
      })
    )
    this.therapists$ = this.clinicEmittingService.selectedClinic$.pipe(
      switchMap(clinicId => this.doctorAppointmentService.getAllTherapistsByClinic(clinicId)),
      filter(therapists => therapists !== null),
      map(response => {
        return response;
      })
    )
  }
  pick(event: any) {

  }
  unpick(event: any) {

  }
  checkAllTherapists(event: any) {
    if (event.currentTarget.checked)
      this.therapists$ = this.doctorAppointmentService.getAllTherapists().pipe(
        filter(therapists => therapists !== null),
        map(response => {
          return response;
        })
      )
    else
      this.therapists$ = this.clinicEmittingService.selectedClinic$.pipe(
        switchMap(clinicId => this.doctorAppointmentService.getAllTherapistsByClinic(clinicId)),
        filter(therapists => therapists !== null),
        map(response => {
          return response;
        })
      )
  }

}
