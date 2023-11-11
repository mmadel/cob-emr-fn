import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { User } from '../../../administration/model/user/user';

@Injectable({
  providedIn: 'root'
})
export class DoctorUserService {

  constructor(private http: HttpClient) { }
  private baseUrl = environment.baseURL + 'user'
  public find() {
    var url = this.baseUrl + '/find/doctors'
    return this.http.get<User[]>(url, { observe: 'response' })
  }
}
