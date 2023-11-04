import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { Clinic } from '../../../patient/models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  public selectedClinic$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  private userUrl = environment.baseURL + 'user'
  constructor(private httpClient:HttpClient) { }
  getByUserId(userId: string | undefined) {
    const url = this.userUrl + '/find'+'/clinics/userUUID/' + userId;
    return this.httpClient.get(url).pipe(
      map((response: any) => <Clinic[]>response));
  }
}
