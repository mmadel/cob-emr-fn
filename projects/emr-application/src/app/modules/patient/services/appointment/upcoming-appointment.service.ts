import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClinicService } from '../../../administration/services/clinic/clinic.service';
import { IApiParams } from '../../../common/interfaces/api.params';
import { BasePaginationService } from '../../../common/service/base-pagination.service';


@Injectable({
  providedIn: 'root'
})
export class UpcomingAppointmentService extends BasePaginationService {

  private baseUrl = environment.baseURL + 'appointment/chart/incoming'
  constructor(httpClient: HttpClient,clinicService: ClinicService) { super(httpClient,clinicService) }

  public findAllIncomingAppointments(config$: BehaviorSubject<IApiParams>, pateintId: number): Observable<any> {
    return this.get(config$, this.baseUrl + '/find/patientId/' + pateintId + '/clinicId/' + 2)
  }

  public findIncomingAppointmentsByCase(config$: BehaviorSubject<IApiParams>,
    pateintId: number,
    caseId: number): Observable<any> {
    return this.get(config$, this.baseUrl + '/find/patientId/' + pateintId + '/clinicId/' + 2 + '/patientCaseId/' + caseId);
  }
}
