import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClinicalUser } from '../../../common/models/user/user';
import { Clinic } from '../../../patient/models/clinic';

@Component({
  selector: 'app-organization-clinics-creation',
  templateUrl: './organization-clinics-creation.component.html',
  styleUrls: ['./organization-clinics-creation.component.css']
})
export class OrganizationClinicsCreationComponent implements OnInit {
  @ViewChild('doctorForm') doctorForm: NgForm;
  createDoctorVisible: boolean = false
  isValidDoctor:boolean = false;
  createdClinic: Clinic = {
    name: '',
    address: ''
  };
  administratorDoctor: ClinicalUser = {
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
  }
  @ViewChild('clinicForm') clinicForm: NgForm;

  clinics: Clinic[] = new Array
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.clinicForm.valid && this.doctorForm.valid) {
      this.clinics.push(this.createdClinic);
      this.clearClinic();
      this.clinicForm.reset();
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
    if (this.doctorForm.valid) {
      this.isValidDoctor= true;
      this.closeCreateDoctorModal();
      this.doctorForm.reset;
    }
  }
  clearDoctormodel() {
    this.administratorDoctor = {
      username: '',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  }
  clearClinic() {
    this.createdClinic = {
      name: '',
      address: ''
    };
  }
}
