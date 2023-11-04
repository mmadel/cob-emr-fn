import { Component, Input } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular-pro';
import { ClinicService } from '../../../modules/administration/services/clinic/clinic.service';
import { Clinic } from '../../../modules/patient/models/clinic';
import { KcAuthService } from '../../../modules/security/service/kc-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  clinics: Clinic[] = new Array();
  @Input() sidebarId: string = "sidebar1";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  public themeSwitch = new UntypedFormGroup({
    themeSwitchRadio: new UntypedFormControl('light'),
  });

  constructor(private classToggler: ClassToggleService
    , private ksAuthServiceService: KcAuthService
    , private clinicService: ClinicService) {
    super();
  }

  setTheme(value: string): void {
    this.themeSwitch.setValue({ themeSwitchRadio: value });
    this.classToggler.toggle('body', 'dark-theme');
  }
  logout() {
    this.ksAuthServiceService.logout()
  }
  setSelectedClinic(event: any) {
    this.clinicService.selectedClinic$.next(event.target.value)
  }
}
