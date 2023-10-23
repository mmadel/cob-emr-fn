import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { SchedulerConfiguration } from '../models/configuration';

@Injectable({
  providedIn: 'root'
})
export class SchedulerConfigurationService {
  private baseUrl = environment.baseURL;
  constructor(private _http: HttpClient) { }
  create(clinicSchedulerConfiguration: SchedulerConfiguration) {
    const createClinicSchedulerConfigurationURL = this.baseUrl + 'scheduler/configuration';
    return this._http.post(createClinicSchedulerConfigurationURL, JSON.stringify(clinicSchedulerConfiguration));
  }

  update(clinicSchedulerConfiguration: SchedulerConfiguration) {
    const createClinicSchedulerConfigurationURL = this.baseUrl + 'scheduler/configuration';
    return this._http.put(createClinicSchedulerConfigurationURL, JSON.stringify(clinicSchedulerConfiguration));
  }

  retrieveCliniSchedulerConfigurationById(id: number) {
    const listClinicSchedulerConfigurationURL = this.baseUrl + 'scheduler/configuration/find/id/' + id;
    return this._http.get<SchedulerConfiguration>(listClinicSchedulerConfigurationURL);
  }

  retrieveClinicSchedulerConfigurations(uuid: string) {
    const listClinicSchedulerConfigurationURL = this.baseUrl + 'scheduler/configuration/find/uuid/' + uuid;
    return this._http.get(listClinicSchedulerConfigurationURL);
  }
  retrieveCliniSchedulerConfigurationByClinicId(clinicId: number, organizationId: number) {
    const listClinicSchedulerConfigurationURL = this.baseUrl + 'scheduler/configuration/find/clinicId/' + clinicId + '/organization/' + organizationId;
    return this._http.get<SchedulerConfiguration>(listClinicSchedulerConfigurationURL);
  }
}
