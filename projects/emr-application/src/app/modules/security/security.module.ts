import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { initializer } from './keycloak-initializer';
import { KeycloakService } from 'keycloak-angular';
import { KcAuthService } from './service/kc-auth.service';
import { KcAuthGuard } from './service/kc-auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: initializer,
        multi: true,
        deps: [KeycloakService]
    },
    KeycloakService,
    KcAuthService,
    KcAuthGuard
  ]
})
export class SecurityModule { }
