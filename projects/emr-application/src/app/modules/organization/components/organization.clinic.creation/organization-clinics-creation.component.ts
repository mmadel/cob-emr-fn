import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SingleAddressComponent } from '../../../common/components/single.address/single-address.component';
import { Address } from '../../../common/models';
import { ClinicalUser } from '../../../common/models/user/user';
import { Clinic } from '../../../patient/models/clinic';

@Component({
  selector: 'app-organization-clinics-creation',
  templateUrl: './organization-clinics-creation.component.html',
  styleUrls: ['./organization-clinics-creation.component.css']
})
export class OrganizationClinicsCreationComponent implements OnInit {
  @ViewChild('doctorForm') doctorForm: NgForm;
  @ViewChild('clinicAddress') clinicAddress: SingleAddressComponent;
  validAddress: boolean = true;
  submitted: boolean = false;
  createDoctorVisible: boolean = false
  showDoctorsVisible: boolean = false;
  isValidDoctor: boolean = false;

  createdClinic: Clinic = {
    name: '',
    address: {
      addressType: null,
      country: null
    }
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

  clinics: Clinic[] = new Array();
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.clinicForm.valid && this.isValidDoctor) {
      var users: ClinicalUser[] = new Array();
      users.push(this.administratorDoctor)
      this.createdClinic.users = users;
       this.createdClinic.address= this.clinicAddress.getAddress();
      this.clinics.push(this.createdClinic);
      this.clearAll();
      console.log(JSON.stringify(this.clinicAddress.getAddress()));
    } else {
      this.submitted = true;
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
      address : {}
    };
  }
  clearAll() {
    this.clearClinic();
    this.clearDoctormodel()
    this.clinicForm.reset();
    this.doctorForm.reset();
    this.clinicAddress.resetSingleAddressForm();
    this.isValidDoctor = false
    this.submitted = false
  }
  remove(index: number) {
    this.clinics.splice(index, 1);
  }
  showDoctor(clinic: Clinic) {
    this.showDoctorsVisible = !this.showDoctorsVisible;
    this.selectedDoctor = clinic.users[0];
  }
}
