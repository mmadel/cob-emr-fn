import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentService {
  base: string = environment.baseURL + 'patient'


  constructor(private httpClient: HttpClient) { }

  getPateint(clinicId: number):Observable<any> {
    const url = this.base + '/find/all/clinicId/'+ clinicId;
    return this.httpClient.get(url);
  }
}
