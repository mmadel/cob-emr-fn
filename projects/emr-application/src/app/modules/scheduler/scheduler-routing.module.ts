import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSchdulerComponent } from './components/scheduler.view/view-schduler.component';

const routes: Routes = [{
  path: '',
    data: {
      title: 'scheduler',
    },
    children:[
      {
        path: 'view',
        component: ViewSchdulerComponent,
        data: {
          title: 'view',
        },
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule { }
