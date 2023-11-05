import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ListTemplate } from '../../../../common/template/list.template';
import { User } from '../../../model/user/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent extends ListTemplate implements OnInit {
  users$!: Observable<User[]>;
  columns: (string | IColumn)[];
  constructor(private router: Router
    , private toastr: ToastrService) { super(); }

  ngOnInit(): void {
    this.columns = this.constructColumns(['name', 'insuranceType', 'phone', 'fax', 'actions']);
    this.initListComponent();
  }
  create() {
    this.router.navigateByUrl('/insurance/company/create');
  }
  remove(item: any) {
  }

}
