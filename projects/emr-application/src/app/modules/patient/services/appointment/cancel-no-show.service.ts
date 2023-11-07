import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ClinicService } from '../../../administration/services/clinic/clinic.service';
import { IApiParams } from '../../../common/interfaces/api.params';
import { BasePaginationService } from '../../../common/service/base-pagination.service';
import { CacheService } from '../../../common/service/cahce/cache.service';


@Injectable({
  providedIn: 'root'
})
export class CancelNoShowService extends BasePaginationService {

  private baseUrl = environment.baseURL + 'appointment/chart/cno/find/cancel/noshow'
  constructor(httpClient: HttpClient, cahceService: CacheService) { super(httpClient, cahceService) }

  public findCancelNoShowAppointments(config$: BehaviorSubject<IApiParams>,
    pateintId: number,
    clinicId: number,
    caseId: number) {
    return this.get(config$, this.baseUrl + '/patientId/' + pateintId + '/clinicId/' + 2 + '/patientCaseId/' + caseId)
  }
}
