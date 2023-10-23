import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentStatusService {
  private baseUrl = environment.baseURL;
  constructor(private _http: HttpClient) { }
  retrieveIncomingAppointementForCase(patientId: number, clinicId: number, patientCaseId: number, page: number, size: number) {
    const incomingAppointmentURL = this.baseUrl + 'appointment/find/incoming/patientId/' + patientId
      + '/clinicId/' + clinicId + '/patientCaseId/' + patientCaseId + '/page/' + page + '/size/' + size;
    return this._http.get<Appointment[]>(incomingAppointmentURL);
  }
  retrieveIncomingAppointement(patientId: number, clinicId: number, page: number, size: number) {
    const incomingAppointmentURL = this.baseUrl + 'appointment/find/incoming/patientId/' + patientId + '/clinicId/' + clinicId + '/page/' + page + '/size/' + size;
    return this._http.get<Appointment[]>(incomingAppointmentURL);
  }
  retrievePreviuosAppointementForCase(patientId: number, clinicId: number, patientCaseId: number, page: number, size: number) {
    const incomingAppointmentURL = this.baseUrl + 'appointment/find/previous/patientId/' + patientId + '/clinicId/' + clinicId + '/patientCaseId/' + patientCaseId + '/page/' + page + '/size/' + size;
    return this._http.get<Appointment[]>(incomingAppointmentURL);
  }
  retrievePreviuosAppointement(patientId: number, clinicId: number, page: number, size: number) {
    const incomingAppointmentURL = this.baseUrl + 'appointment/find/previous/patientId/' + patientId + '/clinicId/' + clinicId + '/page/' + page + '/size/' + size;
    return this._http.get<Appointment[]>(incomingAppointmentURL);
  }
  retrieveCancelAppointement(patientId: number, clinicId: number, patientCaseId: number) {
    const cancelAppointmentURL = this.baseUrl + 'appointment/find/cancel/patientId/' + patientId
      + '/clinicId/' + clinicId + '/patientCaseId/' + patientCaseId;
    return this._http.get<Appointment[]>(cancelAppointmentURL);
  }

  retrievenoShowAppointement(patientId: number, clinicId: number, patientCaseId: number) {
    const noShowAppointmentURL = this.baseUrl + 'appointment/find/noshow/patientId/' + patientId
      + '/clinicId/' + clinicId + '/patientCaseId/' + patientCaseId;
    return this._http.get<Appointment[]>(noShowAppointmentURL);
  }

  retrieveCancelnoShowAppointement(patientId: number, clinicId: number, patientCaseId: number, page: number, size: number) {
    const noShowAppointmentURL = this.baseUrl + 'appointment/find/cancel/noShow/patientId/' + patientId
      + '/clinicId/' + clinicId + '/patientCaseId/' + patientCaseId
      + '/page/' + page + '/size/' + size;
    return this._http.get<any>(noShowAppointmentURL);
  }

}
