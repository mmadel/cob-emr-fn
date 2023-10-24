import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import {CreateOrganizationComponent ,ListOrganizationComponent} from './index'
import { EmrCommonModule } from '../common/emr-common.module';
import { AccordionModule, CollapseModule, DatePickerModule, ModalModule, SharedModule, SmartPaginationModule, SmartTableModule } from '@coreui/angular-pro';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    CreateOrganizationComponent,
    ListOrganizationComponent
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
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ]
})
export class OrganizationModule { }
