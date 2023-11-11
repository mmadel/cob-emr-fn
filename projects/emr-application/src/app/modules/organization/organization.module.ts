import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';

import { EmrCommonModule } from '../common/emr-common.module';
import { AccordionModule, CollapseModule, DatePickerModule, ModalModule, SharedModule, SmartPaginationModule, SmartTableModule } from '@coreui/angular-pro';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  CreateOrganizationComponent,
  ListOrganizationComponent,
  ListOrganizationClinicsComponent,
  OrganizationClinicsCreationComponent
} from './index';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
@NgModule({
  declarations: [
    CreateOrganizationComponent,
    ListOrganizationComponent,
    ListOrganizationClinicsComponent,
    OrganizationClinicsCreationComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    EmrCommonModule,
    SmartTableModule,
    SharedModule,
    CollapseModule,
    ModalModule,
    DatePickerModule,
    AccordionModule,
    AutocompleteLibModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ]
})
export class OrganizationModule { }
