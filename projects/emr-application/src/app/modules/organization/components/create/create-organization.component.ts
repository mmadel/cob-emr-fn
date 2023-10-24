import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressComponent } from '../../../common/components/address/address.component';
import { Organization } from '../../models/organiztion';
import { OrganizationClinicsCreationComponent } from '../organization.clinic.creation/organization-clinics-creation.component';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  @ViewChild(AddressComponent) organizationBillingAddress: AddressComponent;

  @ViewChild(OrganizationClinicsCreationComponent) organizationClinicsCreationComponent: OrganizationClinicsCreationComponent;
  organization: Organization = {
    name: '',
    dba: '',
    groupNPI: '',
    taxID: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  create() {
    console.log(JSON.stringify(this.organizationBillingAddress.addresses))
  }
}
