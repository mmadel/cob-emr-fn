import { Component, OnInit } from '@angular/core';
import { IColumn, IItem } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { Organization } from '../../models/organiztion';
import { OrganizationService } from '../../services/organization.service';
import orgData from './data'
@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent implements OnInit {
  data: IItem[] = orgData;
  public clinicsVisible: boolean = false;
  organiztions: Organization[]
  readonly columns: (string | IColumn)[] = [
    {
      key: 'name',
      label: 'Name',
      // _style: { width: '10%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'dba',
      label: 'Group DBA',
      //_style: { width: '10%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'npi',
      label: 'Group NPI',
      //_style: { width: '10%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'action',
      label: 'Action',
      _style: { width: '20%' },
      filter: false,
      sorter: false,
    },
  ]
  details_visible = Object.create({});
  toggleDetails(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }
  constructor(private organizationService: OrganizationService) { }

  ngOnInit(): void {
    this.organizationService.getAll()
      .subscribe((organizations) => {
        this.organiztions = organizations
      }, error => {
        console.log(error);
      })
  }
  create() {

  }
  handleHistoryChange(event: any) {
    this.clinicsVisible = event;
  }
  closeHistoryModal() {
    this.clinicsVisible = !this.clinicsVisible;
  }
  openClinicModal() {
    this.clinicsVisible = !this.clinicsVisible;
  }
}
