import { Component, OnInit } from '@angular/core';
import { Organization } from '../../models/organiztion';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  organization: Organization = {
    name: '',
    dba: '',
    groupNPI: '',
    taxID: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
