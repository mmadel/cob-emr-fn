import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/emr-application/src/environments/environment';
import { map } from 'rxjs';
import { Organization } from '../models/organiztion';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private baseUrl = environment.baseURL + 'organization'
  constructor(private httpClient: HttpClient) { }

  getAll() {
    const historyFollowupURL = this.baseUrl + '/find'
    return this.httpClient.get(historyFollowupURL).pipe(
      map((response: any) => <Organization[]>response.records));
  }

  create(organization: Organization) {
    const createFollowupURL = this.baseUrl + '/create'
    const headers = { 'content-type': 'application/json' }
    return this.httpClient.post(`${createFollowupURL}`, JSON.stringify(organization), { 'headers': headers, observe: 'response' })
  }
}
