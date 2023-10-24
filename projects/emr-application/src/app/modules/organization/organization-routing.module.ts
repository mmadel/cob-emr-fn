import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrganizationComponent } from './components/create/create-organization.component';
import { ListOrganizationComponent } from './components/list/list-organization.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Organization',
    },
    children: [
      {
        path: 'create',
        component: CreateOrganizationComponent,
        data: {
          title: 'create',
        },
      },
      {
        path: 'list',
        component: ListOrganizationComponent,
        data: {
          title: 'Organizations',
        },

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
