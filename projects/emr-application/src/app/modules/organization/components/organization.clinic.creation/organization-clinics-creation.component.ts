import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressComponent } from '../../../common/components/address/address.component';
import { ClinicalUser } from '../../../common/models/user/user';
import { Clinic } from '../../../patient/models/clinic';

@Component({
  selector: 'app-organization-clinics-creation',
  templateUrl: './organization-clinics-creation.component.html',
  styleUrls: ['./organization-clinics-creation.component.css']
})
export class OrganizationClinicsCreationComponent implements OnInit {
  createDoctorVisible: boolean = false
  administratorDoctor: ClinicalUser={
    username:'',
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    phone:'',
  }
  @ViewChild('clinicForm') clinicForm: NgForm;
  createdClinic: Clinic = {
    name: '',
    address: ''
  };
  clinics: Clinic[] = new Array
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.clinicForm.valid) {
      this.clinics.push(this.createdClinic);
    }
  }
  openDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  handleCreateDoctorChange(event: any) {
    this.createDoctorVisible = event;
  }
  closeCreateDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  saveDoctor() {

  }
}
