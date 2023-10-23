import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { AppointmentFilter } from '../models/appointment.filter';
import { AppointmentType } from '../models/appointment.type';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = environment.baseURL;
  constructor(private _http: HttpClient) { }
  createAppointment(appointment: Appointment) {
    const createAppointmentURL = this.baseUrl + 'appointment';
    return this._http.post(createAppointmentURL, JSON.stringify(appointment));
  }

  retrieveAppointments(startDate: number, endDate: number, clinicId: number) {
    const listAppointmentURL = this.baseUrl + 'appointment/find/' + startDate + '/' + endDate + '/' + clinicId;
    return this._http.get(listAppointmentURL);
  }
  retrieveAppointmentsByFilter(startDate: number, endDate: number, clinicId: number, filters: AppointmentFilter) {
    const listAppointmentURL = this.baseUrl + 'appointment/find/filter/' + startDate + '/' + endDate + '/' + clinicId;
    return this._http.post(listAppointmentURL, JSON.stringify(filters));
  }
  updateAppointment(appointment: Appointment) {
    const updateAppointmentURL = this.baseUrl + 'appointment';
    return this._http.put(updateAppointmentURL, JSON.stringify(appointment));
  }
  updateAppointmentList(appointment: Appointment) {
    const updateAppointmentURL = this.baseUrl + 'appointment/list';
    return this._http.put(updateAppointmentURL, JSON.stringify(appointment));
  }
  retrieveAppointmentTypes(clinicId: number): Observable<AppointmentType[]> {
    const listAppointmentTypesURL = this.baseUrl + 'appointment/type/find/clinicId/' + clinicId;
    return this._http.get<AppointmentType[]>(listAppointmentTypesURL);
  }

  createAppointmentType(type: AppointmentType) {
    const createAppointmentTypURL = this.baseUrl + 'appointment/type';
    return this._http.post(createAppointmentTypURL, JSON.stringify(type, function replacer(key, value) {
      if (this && key === "colorObj")
        return undefined;
      return value;
    }));
  }
}
