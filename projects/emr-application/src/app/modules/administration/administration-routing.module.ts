import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInsuranceCompanyComponent } from './components/insurance.company/create/create-insurance-company.component';
import { ListInsuranceCompanyComponent } from './components/insurance.company/list/list-insurance-company.component';
import { CreateUserComponent } from './components/user/create/create-user.component';
import { ListUserComponent } from './components/user/list/list-user.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Administration',
  },
  children: [
    {
      path: 'list/insurance/company',
      component: ListInsuranceCompanyComponent,
      data: {
        title: 'Insurance companies',
      },
    },
    {
      path: 'create/insurance/company',
      component: CreateInsuranceCompanyComponent,
      data: {
        title: 'create Insurance Company'
      }
    },

    {
      path: 'list/user',
      component: ListUserComponent,
      data: {
        title: 'Users',
      },
    },
    {
      path: 'create/user',
      component: CreateUserComponent,
      data: {
        title: 'create User'
      }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
