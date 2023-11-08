import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from, switchMap } from 'rxjs';
import { Specialties } from '../../../../common/models/enums/doctor/specialties';
import { Roles } from '../../../../common/models/enums/roles';
import { CacheService } from '../../../../common/service/cahce/cache.service';
import { EncryptService } from '../../../../common/service/encyrption/encrypt.service';
import { Clinic } from '../../../../patient/models/clinic';
import { DoctorUser } from '../../../model/user/doctor';
import { User } from '../../../model/user/user';
import { ClinicService } from '../../../services/clinic/clinic.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('userCreateForm') userCreateForm: NgForm;
  submitted: boolean = false;
  validAddress: boolean = true;
  roles = Roles;
  specialties = Specialties;
  credentials: string[];
  clinics: Clinic[];
  user: User = {
    role: null,
    clinics: [],
    doctor: {
      speciality: null,
      credential: null
    }

  }
  constructor(private clinicService: ClinicService
    , private cacheService: CacheService
    , private userService: UserService
    , private toastr: ToastrService
    , private router: Router
    , private encryptService: EncryptService) { }

  ngOnInit(): void {
    from(this.cacheService.getOrganizationId())
      .pipe(
        switchMap(result => this.clinicService.getByOrganizationId(result))
      ).subscribe((response: any) => {
        this.clinics = response.records;
      })
  }
  create() {
    if (this.userCreateForm.valid) {
      this.submitted = false;
      var encryptedPassword = this.encryptService.encrypt(this.user.password);
      this.user.password = encryptedPassword
      this.userService.create(this.user).subscribe(result => {
        this.toastr.success('Clinic Created');
        this.router.navigateByUrl('emr/administration/list/user')
      }, (error) => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error In Creation');
      })
    } else {
      this.submitted = true;
    }
  }
  resetError() {
    this.submitted = false;
  }
  getDoctorCredentials() {
    if (this.user.doctor.speciality === 'Physical_Therapy') {
      this.credentials = ['DPT', 'PTA']
    }
    if (this.user.doctor.speciality === 'Occupational_Therapy') {
      this.credentials = ['OTD', 'COTA']
    }
    if (this.user.doctor.speciality === 'Speech_Language_Pathology') {
      this.credentials = ['SLP', 'SLPA']
    }
    if (this.user.doctor.speciality === 'Dentistry') {
      this.credentials = ['DMD', 'DDS', 'CDA']
    }
  }
}
