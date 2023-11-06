import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clinic } from '../../../../patient/models/clinic';
import { ClinicService } from '../../../services/clinic/clinic.service';

@Component({
  selector: 'app-create-clinic',
  templateUrl: './create-clinic.component.html',
  styleUrls: ['./create-clinic.component.css']
})
export class CreateClinicComponent implements OnInit {
  @ViewChild('clinicCreateForm') clinicCreateForm: NgForm;
  submitted: boolean = false;
  validAddress: boolean = true;
  clinic: Clinic = {
    name: null,
    address: {
      addressType: null,
      country: null,
    }
  };
  constructor(private clinicService: ClinicService
    , private toastr: ToastrService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    var clinicId = this.route.snapshot.paramMap.get('id');
    if (clinicId !== null) {
      this.clinicService.getById(Number(clinicId))
        .subscribe(selectedClinic => {
          this.clinic = selectedClinic;
        })
    }
  }
  create() {
    this.clinic.organizationId = 1;
    this.validAddress = this.isAddressValid();
    if (this.clinicCreateForm.valid && this.validAddress) {
      this.submitted = false;
      this.clinicService.create(this.clinic).subscribe(dd => {
        this.toastr.success('Clinic Created.!!');
        this.router.navigateByUrl('emr/administration/list/clinic')
      })
    } else {
      this.submitted = true;
    }
  }
  resetError() {
    this.submitted = false;
  }
  isAddressValid() {
    return this.clinic.address.firstAddress !== null
      && this.clinic.address.addressType !== null
      && this.clinic.address.city !== null
      && this.clinic.address.country !== null
      && this.clinic.address.state !== null
      && this.clinic.address.zipCode !== null;
  }
}
