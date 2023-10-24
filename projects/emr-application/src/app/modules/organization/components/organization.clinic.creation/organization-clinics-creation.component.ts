import { Component, OnInit } from '@angular/core';
import { Clinic } from '../../../patient/models/clinic';

@Component({
  selector: 'app-organization-clinics-creation',
  templateUrl: './organization-clinics-creation.component.html',
  styleUrls: ['./organization-clinics-creation.component.css']
})
export class OrganizationClinicsCreationComponent implements OnInit {
  createDoctorVisible: boolean = false
  createdClinic: Clinic = {
    name: '',
    address: ''
  };
  clinics: Clinic[]
  constructor() { }

  ngOnInit(): void {
  }
  add() {

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
