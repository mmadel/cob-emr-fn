import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClinicService } from '../../../administration/services/clinic/clinic.service';
import { IApiParams } from '../../../common/interfaces/api.params';
import { BasePaginationService } from '../../../common/service/base-pagination.service';
import { CacheService } from '../../../common/service/cahce/cache.service';


@Injectable({
  providedIn: 'root'
})
export class PreviousAppointmentService extends BasePaginationService {
  private baseUrl = environment.baseURL + 'appointment/chart/previous'
  constructor(httpClient: HttpClient,cahceService: CacheService) {
    super(httpClient,cahceService);
  }

  public findAllPreviousAppointments(config$: BehaviorSubject<IApiParams>, pateintId: number): Observable<any> {
    return this.get(config$, this.baseUrl + '/find/patientId/' + pateintId + '/clinicId/' + 2)
  }

  public findPreviousAppointmentsByCase(config$: BehaviorSubject<IApiParams>,
    pateintId: number,
    caseId: number): Observable<any> {
    return this.get(config$, this.baseUrl + '/find/patientId/' + pateintId + '/clinicId/' + 1 + '/patientCaseId/' + caseId);

  }
}
