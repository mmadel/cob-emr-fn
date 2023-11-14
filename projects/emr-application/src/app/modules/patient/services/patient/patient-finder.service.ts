import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { Observable } from 'rxjs';
import { InsuranceCompany } from '../../../administration/model/insurance.company/insurance.company';
import { Clinic } from '../../models/clinic';
import { PateintResponse } from '../../models/response/patient.response';

@Injectable({
  providedIn: 'root'
})
export class PatientFinderService {
  private baseUrl = environment.baseURL + 'patient'
  constructor(private httpClient: HttpClient) { }

  getPatient(patientId: number, clinicId: number) {
    const headers = { 'content-type': 'application/json' }
    var getPatientURL = this.baseUrl + '/find/clinicId/' + 1 + '/patient/' + patientId
    return this.httpClient.get<PateintResponse>(`${getPatientURL}`, { 'headers': headers },)
  }

  getInsuranceCompaniesForPatient(clinicId: number): Observable<any>{
    console.log('service ' + clinicId)
    var getPatientURL = environment.baseURL + 'insurance/company/find/all/clinicId/' +clinicId
    return this.httpClient.get<InsuranceCompany[]>(`${getPatientURL}`, { observe: 'response' });
  }

  getClinicsForPatientByOrganizationId(organizationId:number): Observable<any>{
    var getPatientURL = environment.baseURL + 'clinic//find/organization/' +organizationId
    return this.httpClient.get<Clinic[]>(`${getPatientURL}`, { observe: 'response' });
  }
}
