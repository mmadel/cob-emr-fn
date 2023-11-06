import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ListTemplate } from '../../../../common/template/list.template';
import { Clinic } from '../../../../patient/models/clinic';
import { ClinicService } from '../../../services/clinic/clinic.service';

@Component({
  selector: 'app-list-clinic',
  templateUrl: './list-clinic.component.html',
  styleUrls: ['./list-clinic.component.css']
})
export class ListClinicComponent extends ListTemplate implements OnInit {
  clinics$!: Observable<Clinic[]>;
  columns: (string | IColumn)[];
  constructor(private router: Router 
    ,private clinicService:ClinicService
    ,private toastr: ToastrService)
     {super(); }

  ngOnInit(): void {
    this.columns = this.constructColumns(['name', 'insuranceType', 'phone', 'fax', 'actions']);
    this.initListComponent();
  }
  create() {
    this.router.navigateByUrl('emr/administration/create/clinic');
  }
  remove(item: any) {
   
  }
}
