import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, switchMap } from 'rxjs';
import { Roles } from '../../../../common/models/enums/roles';
import { CacheService } from '../../../../common/service/cahce/cache.service';
import { Clinic } from '../../../../patient/models/clinic';
import { User } from '../../../model/user/user';
import { ClinicService } from '../../../services/clinic/clinic.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('userCreateForm') userCreateForm: NgForm;
  roles = Roles;
  clinics:Clinic[];
  user: User = {
    role: null,
    clinics: []
  }
  constructor(private clinicService: ClinicService, private cacheService: CacheService) { }

  ngOnInit(): void {
    from(this.cacheService.getOrganizationId())
    .pipe(
      switchMap(result => this.clinicService.getByOrganizationId(result))
    ).subscribe((response:any)=>{
      this.clinics = response.records;
      console.log(this.clinics)
    })
  }
  create() {

  }
  resetError() {

  }
}
