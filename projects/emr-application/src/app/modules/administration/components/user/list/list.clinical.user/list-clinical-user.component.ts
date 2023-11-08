import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { ToastrService } from 'ngx-toastr';
import { ListTemplate } from 'projects/emr-application/src/app/modules/common/template/list.template';
import { Observable } from 'rxjs';
import { User } from '../../../../model/user/user';

@Component({
  selector: 'app-list-clinical-user',
  templateUrl: './list-clinical-user.component.html',
  styleUrls: ['./list-clinical-user.component.css']
})
export class ListClinicalUserComponent extends ListTemplate implements OnInit {
  users$!: Observable<User[]>;
  columns: (string | IColumn)[];
  constructor(private router: Router
    , private toastr: ToastrService) {super() }

  ngOnInit(): void {
    this.columns = this.constructColumns(['name', 'insuranceType', 'phone', 'fax', 'actions']);
    this.initListComponent();
  }

}
