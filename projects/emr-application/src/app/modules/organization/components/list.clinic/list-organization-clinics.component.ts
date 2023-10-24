import { Component, Input, OnInit } from '@angular/core';
import { Clinic } from '../../../patient/models/clinic';

@Component({
  selector: 'app-list-organization-clinics',
  templateUrl: './list-organization-clinics.component.html',
  styleUrls: ['./list-organization-clinics.component.css']
})
export class ListOrganizationClinicsComponent implements OnInit {
  @Input() clinics: Clinic[];
  constructor() { }

  ngOnInit(): void {
  }

}
