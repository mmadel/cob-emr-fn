import { Component, OnInit } from '@angular/core';
import { IColumn, IItem } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { Address } from '../../../common/models';
import { Clinic } from '../../../patient/models/clinic';
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
  organiztions: IItem[]
  clinics:Clinic[];
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
      key: 'groupNPI',
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
  openClinicModal(clinics:Clinic[]) {
    this.clinics = clinics;
    this.clinicsVisible = !this.clinicsVisible;
  }
  constructBillingAddress(billingAddress: Address) :string{
    var result: string = '';
    for (const [key, value] of Object.entries(billingAddress)) {
      if (key === 'firstAddress')
        result = value + ',';
      if (key === 'state')
        result = value + ',';
      if (key === 'zipCode')
        result = value;
    }
    return result;
  }
}
