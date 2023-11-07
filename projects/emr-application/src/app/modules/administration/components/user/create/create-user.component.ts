import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roles } from '../../../../common/models/enums/roles';
import { User } from '../../../model/user/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('userCreateForm') userCreateForm: NgForm;
  roles = Roles;
  user:User={
    role:null
  }
  constructor() { }

  ngOnInit(): void {
  }
  create(){

  }
  resetError(){
    
  }
}
