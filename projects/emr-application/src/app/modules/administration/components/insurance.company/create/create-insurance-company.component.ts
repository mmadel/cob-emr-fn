import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddressComponent } from '../../../../common/components/address/address.component';
import { Address, InsuranceCompanyType } from '../../../../common/models';
import { InsuranceCompany } from '../../../model/insurance.company/insurance.company';
import { InsuranceCompanyService } from '../../../services/insurance.company/insurance-company.service';

@Component({
  selector: 'app-create-insurance-company',
  templateUrl: './create-insurance-company.component.html',
  styleUrls: ['./create-insurance-company.component.css']
})
export class CreateInsuranceCompanyComponent implements OnInit {
  @ViewChild('insuranceCompanyCreateForm') insuranceCompanyCreateForm: NgForm;
  @ViewChild('addressComp') addpressComp: AddressComponent;
  insuranceCompanytypes = InsuranceCompanyType;
  addresses: Address[];
  insuranceCompany: InsuranceCompany = {
    id: null,
    name: null,
    insuranceType: null,
    phone: null,
    fax: null,
    addresses: [],
    clinicId: null,
  }
  errorMessage: string | null;
  submitted: boolean;
  constructor(private toastr: ToastrService,
    private insuranceCompanyService: InsuranceCompanyService,
    private router: Router,
    private spinner: NgxSpinnerService) {
  }
  ngOnInit(): void {
  }
  create() {
    if (this.insuranceCompanyCreateForm.valid && this.addresses !== undefined) {
      this.insuranceCompany.addresses = this.addresses;
      this.insuranceCompany.clinicId = 1;
      console.log(JSON.stringify(this.insuranceCompany))
      this.spinner.show();
      this.insuranceCompanyService.create(this.insuranceCompany).subscribe(() => {
        this.spinner.hide();
        this.insuranceCompanyCreateForm.reset();
        this.toastr.success('Insurance Company Created.!!');
        this.addpressComp.addresses = [];
        this.router.navigateByUrl('insurance/company/list')
      })
    } else {
      this.toastr.error('Please Check Your Inputs', 'Error In Creation');
    }
  }
  resetError() {

  }
  getInsuranceCompanyAddresses(addresses: any) {
    this.addresses = addresses;
  }
}
