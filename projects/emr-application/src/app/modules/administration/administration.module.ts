import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';

import {
  CreateInsuranceCompanyComponent,
  ListInsuranceCompanyComponent,
  CreateUserComponent,
  ListUserComponent
} from './index'
import { SmartPaginationModule, SmartTableModule } from '@coreui/angular-pro';
import { EmrCommonModule } from '../common/emr-common.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ListClinicComponent } from './components/clinic/list/list-clinic.component';

@NgModule({
  declarations: [
    CreateInsuranceCompanyComponent,
    ListInsuranceCompanyComponent,
    CreateUserComponent,
    ListUserComponent,
    ListClinicComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SmartPaginationModule,
    SmartTableModule,
    EmrCommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ]
})
export class AdministrationModule { }
