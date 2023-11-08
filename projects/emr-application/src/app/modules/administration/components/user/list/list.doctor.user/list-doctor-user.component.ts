import { Component, OnInit } from '@angular/core';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { ListTemplate } from 'projects/emr-application/src/app/modules/common/template/list.template';
import { Observable } from 'rxjs';
import { DoctorUser } from '../../../../model/user/doctor';

@Component({
  selector: 'app-list-doctor-user',
  templateUrl: './list-doctor-user.component.html',
  styleUrls: ['./list-doctor-user.component.css']
})
export class ListDoctorUserComponent extends ListTemplate implements OnInit  {
  users$!: Observable<DoctorUser[]>;
  columns: (string | IColumn)[];
  constructor() { super()}

  ngOnInit(): void {
    this.columns = this.constructColumns(['name', 'insuranceType', 'phone', 'fax', 'actions']);
    this.initListComponent();
  }

}
