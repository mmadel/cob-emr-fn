import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, Observable, retry, switchMap, throwError } from 'rxjs';
import { IApiParams } from '../../../common/interfaces/api.params';
import { IData } from '../../../patient/components/list/interfaces/i.data';
import { Clinic } from '../../../patient/models/clinic';
const httpOptions = {
  // headers: new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   Connection: 'keep-alive'
  // })
};

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  public selectedClinic$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  private userUrl = environment.baseURL + 'clinic'
  constructor(private httpClient: HttpClient) { }

  create(clinic: Clinic) {
    const headers = { 'content-type': 'application/json' }
    var createURL = this.userUrl + '/create'
    return this.httpClient.post(`${createURL}`, JSON.stringify(clinic), { 'headers': headers })
  }
  getByUserId(userId: string | undefined) {
    const url = this.userUrl + '/find' + '/clinics/userUUID/' + userId;
    return this.httpClient.get(url).pipe(
      map((response: any) => <Clinic[]>response));
  }
  delete(id: number) {

  }
  get(config$: BehaviorSubject<IApiParams>): Observable<any> {
    return config$.pipe(
      debounceTime(100),
      distinctUntilChanged(
        (previous, current) => {
          return JSON.stringify(previous) === JSON.stringify(current);
        }
      ),
      switchMap((config) => this.fetchData(config))
    );
  }
  private fetchData(params: IApiParams): Observable<IData> {
    const apiParams = {
      ...params
    };
    const httpParams: HttpParams = new HttpParams({ fromObject: apiParams });

    const options = Object.keys(httpParams).length
      ? { params: httpParams, ...httpOptions }
      : { params: {}, ...httpOptions };
    return this.httpClient
      .get<IData>(this.userUrl + "/find/organization/" + 1, options)
      .pipe(
        retry({ count: 1, delay: 100000, resetOnSuccess: true }),
        catchError(this.handleHttpError)
      );
  }
  private handleHttpError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

}
