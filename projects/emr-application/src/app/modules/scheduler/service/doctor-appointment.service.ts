import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {
  base: string = environment.baseURL + 'user'
  constructor(private httpClient: HttpClient) { }

  getAllTherapists(): Observable<any> {
    const url = this.base + '/find/doctors'
    return this.httpClient.get(url);
  }

  getAllTherapistsByClinic(clinicId: number): Observable<any> {
    const url = this.base + '/find/all/doctors/clinicId/' + clinicId
    return this.httpClient.get(url);
  }
}
