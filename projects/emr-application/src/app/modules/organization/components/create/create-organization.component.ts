import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasicComponent } from 'projects/emr-application/src/app/util/basic.component';
import { catchError, EMPTY } from 'rxjs';
import { AddressComponent } from '../../../common/components/address/address.component';
import { Organization } from '../../models/organiztion';
import { OrganizationService } from '../../services/organization.service';
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
  isvalidAddress: boolean = false;
  isvalidClinics = false;
  basicInvalidFields: string[] = [];
  valid: boolean = true;
  organization: Organization = {
    name: '',
    dba: '',
    groupNPI: '',
    taxID: ''
  }
  constructor(private organizationService: OrganizationService
    , private router: Router
    , private toastr: ToastrService) {
    super()
  }
  ngAfterViewInit(): void {
    this.setForm(this.organizationForm)
  }

  ngOnInit(): void {

  }
  create() {

    console.log(JSON.stringify(this.organization))
    this.valid = this.validate();
    if (this.valid) {
      this.organization.clinics = this.organizationClinicsCreationComponent.clinics
      this.organization.billingAddress = this.organizationBillingAddress.addresses[0];
      this.organizationService.create(this.organization)
        .subscribe(() => {
          this.reset();
          this.toastr.success('Organization Created.');
          this.router.navigateByUrl('emr/organization/list')
        }, (error) => {
          console.log(error);
          console.log(error)
          this.toastr.error(error.error.message, 'Error In Creation');
        })
    } else {
      this.scrollUp();
    }
    this.scrollUp();
  }
  reset() {
    this.organizationForm.reset();
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
