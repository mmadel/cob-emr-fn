import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './core';
import { KcAuthGuard } from './modules/security/service/kc-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'emr/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'emr',
    component: DefaultLayoutComponent,
    canActivate: [KcAuthGuard],
    data: {
      title: 'Home',
      roles: ['administration_emr_role','clinical_emr_role','clerical_emr_role','billing_emr_role']
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'patient',
        loadChildren: () =>
          import('./modules/patient/patient.module').then((m) => m.PatientModule)
      },
      {
        path: 'administration',
        loadChildren: () =>
          import('./modules/administration/administration.module').then((m) => m.AdministrationModule)
      },
      {
        path: 'organization',
        loadChildren: () =>
          import('./modules/organization/organization.module').then((m) => m.OrganizationModule)
      },
      {
        path: 'scheduler',
        loadChildren: () =>
          import('./modules/scheduler/scheduler.module').then((m) => m.SchedulerModule)
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
