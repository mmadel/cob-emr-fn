import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { ViewSchdulerComponent } from './components/scheduler.view/view-schduler.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { EmrCommonModule } from '../common/emr-common.module';
import { DatePickerModule, DropdownModule, FormModule, ModalModule, TimePickerModule } from '@coreui/angular-pro';
import { AppointmentAddComponent } from './components/appointment.add/appointment-add.component';
import { AppointmentCancelNoshowComponent } from './components/appointment.cancel.noshow/appointment-cancel-noshow.component';
import { AppointmentConfirmComponent } from './components/appointment.confirm/appointment-confirm.component';
import { AppointmentStatusComponent } from './components/appointment.status/appointment-status.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
@NgModule({
    declarations: [
        ViewSchdulerComponent,
        AppointmentAddComponent,
        AppointmentCancelNoshowComponent,
        AppointmentConfirmComponent,
        AppointmentStatusComponent
    ],
    imports: [
        CommonModule,
        SchedulerRoutingModule,
        EmrCommonModule,
        ModalModule,
        DatePickerModule,
        TimePickerModule,
        DropdownModule,
        AutocompleteLibModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        })

    ]
})
export class SchedulerModule { }
