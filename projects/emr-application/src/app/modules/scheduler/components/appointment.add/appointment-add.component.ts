import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { User } from '../../../administration/model/user/user';
import { SchedulerRepetition } from '../../../common/models/enums/scheduler/scheduler.repetition';
import { SchedulerType } from '../../../common/models/enums/scheduler/scheduler.type';
import { ClinicEmittingService } from '../../../common/service/emitting/clinic-emitting.service';
import { PatientCase } from '../../../patient/models/case/patient.case';
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
  @Input() iscreate: boolean;
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
    if (!this.iscreate)
      this.appointmentEmittingService.selectedAppointment$.pipe(
        filter((appointmentId) => appointmentId !== null),
        switchMap((appointmentId) => this.appointmentService.retrieveAppointment(appointmentId))
      ).subscribe((result) => {
        this.populateAppointment(result)
      })
  }
  populateAppointment(appointment: Appointment) {
    var start: Date = moment.unix(appointment.startDate / 1000).toDate();
    var end: Date = moment.unix(appointment.endDate / 1000).toDate()
    this.appointment.appointmentDate.startDate = start;
    this.appointment.appointmentDate.startTime = start;
    this.appointment.appointmentDate.endDate = end;
    this.appointment.appointmentDate.endTime = end;;
    this.appointment.appointmentType = appointment.appointmentType;
    this.appointment.patient = appointment.patient
    this.appointment.patient.fullName = appointment.title.split(':')[0]
    this.appointment.note = appointment.note;
  }
  initAppointmentDate() {
    this.appointment.appointmentDate.startDate = this.startDate;
    this.appointment.appointmentDate.startTime = moment(this.startDate).set("hour", 8).set("minute", 0).toDate();;
    this.appointment.appointmentDate.endDate = moment(this.appointment.appointmentDate.startDate).toDate();
    this.appointment.appointmentDate.endTime = moment(this.appointment.appointmentDate.startTime).add(30, 'minutes').toDate()
  }
  pick(selectedPatient: Patient) {
    this.appointment.patientId = selectedPatient.id;
  }
  unpick(event: any) {
    this.appointment.patientId = null;
  }
  onCaseSelected(selectedCase: any) {
    console.log(JSON.stringify(selectedCase))
    this.appointment.patientCaseId = selectedCase.id;
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
    this.appointment.startDate = moment(this.appointment.appointmentDate.startTime).unix() * 1000;
  }
  chnageEndTime(event: Date) {
    var endTime: Date = moment(this.appointment.appointmentDate.endDate).toDate();
    endTime.setHours(event.getHours());
    endTime.setMinutes(event.getMinutes());
    this.appointment.appointmentDate.endTime = endTime;
    this.appointment.endDate = moment(this.appointment.appointmentDate.endTime).unix() * 1000;
  }
}
