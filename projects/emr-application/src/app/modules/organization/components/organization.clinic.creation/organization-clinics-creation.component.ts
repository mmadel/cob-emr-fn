import { Component, OnInit } from '@angular/core';
import { Clinic } from '../../../patient/models/clinic';

@Component({
  selector: 'app-organization-clinics-creation',
  templateUrl: './organization-clinics-creation.component.html',
  styleUrls: ['./organization-clinics-creation.component.css']
})
export class OrganizationClinicsCreationComponent implements OnInit {
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
}
