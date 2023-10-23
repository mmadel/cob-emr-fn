import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PatientCase } from '../../../patient/models/case/patient.case';
import { Clinic } from '../../../patient/models/clinic';
import { Patient } from '../../../patient/models/patient';
import { AppointmentRepeat } from '../../models/appointment.repeat';
import { AppointmentType } from '../../models/appointment.type';
import { AppointmentService } from '../../service/appointment.service';

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
  allTherapists: boolean = false;
  listClinics: Clinic[];
  patients: Patient[]
  appoitnemntTypes: AppointmentType[] = new Array();
  appointmentclinic: Clinic;
  appointmentPatient: Patient;
  appointmentPatientCase: PatientCase;
  patientCaseId: number;
  appointmentDoctor: TreatingDoctor;
  appointmentType: AppointmentType;
  appointmentTitle: string;
  appointmentNote: string;
  appointmentStatus: string;
  patientCases: PatientCase[];
  treatingDoctors: TreatingDoctor[] = new Array();
  cancelDate: Date;
  repeatsLookups: string[];
  dayMonth: days[];
  patientControl = new FormControl();
  filteredPatientsOptions: Observable<Patient[]>;
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
  constructor(public appointmentService: AppointmentService,) { }
  ngOnInit(): void {
  }

}
