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
  showDoctorsVisible: boolean = false;
  isValidDoctor: boolean = false;
  createdClinic: Clinic = {
    name: '',
    address: {}
  };
  administratorDoctor: ClinicalUser = {
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
  }
  selectedDoctor: ClinicalUser = {
    username: '',
    npi: ''
  }
  @ViewChild('clinicForm') clinicForm: NgForm;

  clinics: Clinic[] = new Array
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.clinicForm.valid) {
      var users: ClinicalUser[] = new Array();
      users.push(this.administratorDoctor)
      this.createdClinic.users = users;
      this.clinics.push(this.createdClinic);
      this.clearAll();
    }
  }
  openDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  handleCreateDoctorChange(event: any) {
    this.createDoctorVisible = event;
  }
  handleShowDoctorsChange(event: any) {
    this.showDoctorsVisible = event;;
  }
  closeShowDoctorsModal() {
    this.showDoctorsVisible = !this.showDoctorsVisible;
  }
  closeCreateDoctorModal() {
    this.createDoctorVisible = !this.createDoctorVisible;
  }
  saveDoctor() {
    if (this.doctorForm.valid) {
      this.isValidDoctor = true;
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
      address: {

      }
    };
  }
  clearAll() {
    this.clearClinic();
    this.clearDoctormodel()
    this.clinicForm.reset();
    this.doctorForm.reset();
    this.isValidDoctor = false
  }
  remove(index: number) {
    this.clinics.splice(index, 1);
  }
  showDoctor(clinic: Clinic) {
    this.showDoctorsVisible = !this.showDoctorsVisible;
    this.selectedDoctor = clinic.users[0];
  }
}
