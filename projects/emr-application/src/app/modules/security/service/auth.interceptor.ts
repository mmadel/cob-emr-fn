import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, finalize, from, mergeMap, Observable, throwError } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { KcAuthService } from './kc-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private kcAuthServiceService: KcAuthService, private keycloakService: KeycloakService
    , private spinner: NgxSpinnerService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    return from(this.kcAuthServiceService.getToken())
      .pipe(
        mergeMap(token => {
          if (localStorage.getItem('access-token') === null) {
            localStorage.setItem('access-token', token)
          }
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
          });
          return next.handle(request);
        }
        ),
        finalize(() => {
          this.spinner.hide();
        }), 
        catchError(error => {
          console.log(JSON.stringify(error))
          if (error.status === 401) {
            this.kcAuthServiceService.logout();
          }
          if (error.error.errorCode === 'UNAUTHORIZED') {
            this.kcAuthServiceService.logout();
          } else {
            return throwError(error);
          }
          return [];
        }))
  }
}
