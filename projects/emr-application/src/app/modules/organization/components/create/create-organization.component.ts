import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasicComponent } from 'projects/emr-application/src/app/util/basic.component';
import { AddressComponent } from '../../../common/components/address/address.component';
import { Organization } from '../../models/organiztion';
import { OrganizationClinicsCreationComponent } from '../organization.clinic.creation/organization-clinics-creation.component';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent extends BasicComponent implements OnInit, AfterViewInit {
  @ViewChild(AddressComponent) organizationBillingAddress: AddressComponent;
  @ViewChild(OrganizationClinicsCreationComponent) organizationClinicsCreationComponent: OrganizationClinicsCreationComponent;
  @ViewChild('organizationForm') organizationForm: NgForm;
  isvalidAddress:boolean = false;
  isvalidClinics = false;
  basicInvalidFields: string[] = [];
  valid: boolean = true;
  organization: Organization = {
    name: '',
    dba: '',
    groupNPI: '',
    taxID: ''
  }
  constructor() {
    super()
  }
  ngAfterViewInit(): void {
    this.setForm(this.organizationForm)
  }

  ngOnInit(): void {

  }
  create() {
    this.valid = this.validate();
    this.scrollUp();
  }

  validate(): boolean {
    var valid: boolean = true;
    this.isvalidAddress = this.organizationBillingAddress.addresses.length > 0
    this.isvalidClinics = this.organizationClinicsCreationComponent.clinics.length > 0
    valid = valid && this.isValid() && this.isvalidAddress && this.isvalidClinics;
    this.basicInvalidFields = [];
    if (!valid)
      this.getInvalidControls().forEach(invalidControl => {
        this.basicInvalidFields.push(invalidControl);
      })
    return valid;
  }
  scrollUp() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo(0, 0);
      }
    })();
  }
}
