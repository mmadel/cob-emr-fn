import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IApiParams } from '../../../../common/interfaces/api.params';
import { BasePaginationService } from '../../../../common/service/base-pagination.service';
import { CacheService } from '../../../../common/service/cahce/cache.service';
import { ClinicEmittingService } from '../../../../common/service/emitting/clinic-emitting.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicalUserService extends BasePaginationService {
  private baseUrl = environment.baseURL + 'user'
  constructor(httpClient: HttpClient,clinicEmittingService :ClinicEmittingService) { super(httpClient,clinicEmittingService) }

  getClinicalUser(config$: BehaviorSubject<IApiParams>): Observable<any> {
    return this.get(config$, this.baseUrl + "/find/clinicals/clinicId/")
  }
  deleteUser(uuid: string) {
    console.log('Service')
    var url = this.baseUrl + '/delete/' + uuid
    return this.httpClient.delete(url)
  }
}
