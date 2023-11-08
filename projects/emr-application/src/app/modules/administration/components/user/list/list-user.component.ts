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
export class ListUserComponent {
  users$!: Observable<User[]>;
  columns: (string | IColumn)[];
  constructor(private router: Router) {  }
  ngOnInit(): void {
  }
  create() {
    this.router.navigateByUrl('emr/administration/create/user');
  }
  remove(item: any) {
  }

}
