import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IApiParams } from '../../../common/interfaces/api.params';
import { BasePaginationService } from '../../../common/service/base-pagination.service';


@Injectable({
  providedIn: 'root'
})
export class PatientFinderPaginationService extends BasePaginationService {

  private baseUrl = environment.baseURL + 'patient'

  constructor(httpClient: HttpClient) { super(httpClient) }

  getPateints(config$: BehaviorSubject<IApiParams>): Observable<any> {
    return this.get(config$, this.baseUrl + "/find/clinicId/" + 1)
  }
}
