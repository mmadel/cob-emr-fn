import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import {CreateOrganizationComponent ,ListOrganizationComponent} from './index'

@NgModule({
  declarations: [
    CreateOrganizationComponent,
    ListOrganizationComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
