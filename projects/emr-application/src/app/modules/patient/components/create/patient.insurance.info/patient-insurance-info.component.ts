import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasicComponent } from 'projects/emr-application/src/app/util/basic.component';
import { BehaviorSubject, filter, map, Observable, switchMap } from 'rxjs';
import { InsuranceCompany } from '../../../../administration/model/insurance.company/insurance.company';
import { PaymentType } from '../../../../common/models/enums/payment.type';
import { ClinicEmittingService } from '../../../../common/service/emitting/clinic-emitting.service';
import { PatientInsurance } from '../../../models/insurance/patient.insurance';
import { Patient } from '../../../models/patient';
import { PatientFinderService } from '../../../services/patient/patient-finder.service';

@Component({
  selector: 'app-patient-insurance-info',
  templateUrl: './patient-insurance-info.component.html',
  styleUrls: ['./patient-insurance-info.component.css']
})
export class PatientInsuranceInfoComponent extends BasicComponent implements OnInit, AfterViewInit {
  PaymentTypes = PaymentType;
  @Input() patient: Patient;
  insuranceCompanies: Observable<InsuranceCompany[]>;
  patientInsurance: PatientInsurance = {
    id: null,
    insuranceNumber: '',
    groupNumber: '',
    paymentType: null,
    paymentValue: '',
    totalDeductible: '',
    visitAllowed: null,
    expirationDate: null,
    expirationDate_Date: null,
    insuranceCompany: null
  }
  @ViewChild('insuranceForm') insuranceForm: NgForm;
  constructor(private patientFinderService: PatientFinderService,
    private clinicEmittingService: ClinicEmittingService
    ,) { super() }
  ngAfterViewInit(): void {
    this.setForm(this.insuranceForm)
  }

  ngOnInit(): void {
    this.insuranceCompanies = this.clinicEmittingService.selectedClinic$.pipe(
      filter((clinicId) => clinicId != null),
      switchMap((clinicId) => this.patientFinderService.getInsuranceCompaniesForPatient(clinicId)),
      map((response: any) => {
        return response.body;
      })
    );
  }

  add() {
    if (this.insuranceForm.valid) {
      let pushedPatientInsurance: PatientInsurance = Object.assign({}, this.patientInsurance);
      this.patient.patientInsuranceModels.push(pushedPatientInsurance);
      this.insuranceForm.reset();
    }
  }
  remove(index: number) {
    this.patient.patientInsuranceModels.splice(index, 1);
  }
}
