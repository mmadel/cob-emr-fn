import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasicComponent } from 'projects/emr-application/src/app/util/basic.component';
import { PaymentType } from '../../../../common/models/enums/payment.type';
import { PatientInsurance } from '../../../models/insurance/patient.insurance';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patient-insurance-info',
  templateUrl: './patient-insurance-info.component.html',
  styleUrls: ['./patient-insurance-info.component.css']
})
export class PatientInsuranceInfoComponent extends BasicComponent implements OnInit, AfterViewInit {
  PaymentTypes = PaymentType;
  @Input() patient: Patient;
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
  constructor() { super() }
  ngAfterViewInit(): void {
    this.setForm(this.insuranceForm)
  }

  ngOnInit(): void {
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
