import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.baseURL + 'user'
  constructor(private httpClient: HttpClient) { }
  create(user: User){
    const headers = { 'content-type': 'application/json' }
    var createURL = this.userUrl + '/create'
    return this.httpClient.post(`${createURL}`, JSON.stringify(user), { 'headers': headers })
  }

  getClinicalUsers(){

  }
  getDoctorUsers(){
    
  }
}
