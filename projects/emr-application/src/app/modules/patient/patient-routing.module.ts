import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientChartComponent } from './components/chart/patient-chart.component';
import { CreatePatientComponent } from './components/create/create-patient.component';
import { ListPatientComponent } from './components/list/list-patient.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'patient',
    },
    children:[
      {
        path: 'list',
        component: ListPatientComponent,
        data: {
          title: 'list',
        },
      },
      {
        path: 'create',
        component: CreatePatientComponent,
        data: {
          title: 'create',
        },
      },
      {
        path: 'chart/patientId/:patientId',
        component: PatientChartComponent,
        data: {
          title: 'chart',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
