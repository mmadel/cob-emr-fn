import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { User } from '../../../administration/model/user/user';
import { SchedulerRepetition } from '../../../common/models/enums/scheduler/scheduler.repetition';
import { SchedulerType } from '../../../common/models/enums/scheduler/scheduler.type';
import { ClinicEmittingService } from '../../../common/service/emitting/clinic-emitting.service';
import { Patient } from '../../../patient/models/patient';
import { Appointment } from '../../models/appointment';
import { AppointmentRepeat } from '../../models/appointment.repeat';
import { AppointmentEmittingService } from '../../service/appointment-emitting.service';
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
  @ViewChild('appontmentForm') appontmentForm: NgForm;
  @Input() startDate: Date;
  submitted: boolean = false;
  patient$!: Observable<Patient[]>;
  therapists$!: Observable<User[]>;
  appointment: Appointment = new Appointment();
  isAllTherapists: boolean = false;

  appointmentType = SchedulerType;
  appointmentRepetition = SchedulerRepetition;
  addAppointmentVisibility = false;
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
    , private doctorAppointmentService: DoctorAppointmentService
    , private appointmentEmittingService: AppointmentEmittingService) { }
  ngOnInit() {
    this.initAppointmentDate();
    this.patient$ = this.clinicEmittingService.selectedClinic$.pipe(
      tap(clinicId => { this.appointment.clinicId = clinicId }),
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
    this.appointmentEmittingService.selectedAppointment$
  }
  initAppointmentDate() {
    this.appointment.appointmentDate.startDate = this.startDate;
    this.appointment.appointmentDate.startTime = moment(this.startDate).set("hour", 8).set("minute", 0).toDate();;
    this.appointment.appointmentDate.endDate = moment(this.appointment.appointmentDate.startDate).toDate();
    this.appointment.appointmentDate.endTime = moment(this.appointment.appointmentDate.startTime).add(30, 'minutes').toDate()
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
  toggleAddAppointment() {
    this.addAppointmentVisibility = !this.addAppointmentVisibility;
  }
  changeStartTime(event: Date) {
    var startTime: Date = moment(this.startDate).toDate();
    startTime.setHours(event.getHours());
    startTime.setMinutes(event.getMinutes());
    this.appointment.appointmentDate.startTime = startTime;
  }
  chnageEndTime(event: Date) {
    var endTime: Date = moment(this.appointment.appointmentDate.endDate).toDate();
    endTime.setHours(event.getHours());
    endTime.setMinutes(event.getMinutes());
    this.appointment.appointmentDate.endTime = endTime;
  }
}
