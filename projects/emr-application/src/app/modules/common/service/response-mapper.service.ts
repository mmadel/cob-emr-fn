import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseMapperService {
  message: string;
  status: string;
  records: any[];
  constructor() { }

  map(reponseEntity: any) {
    this.message = reponseEntity.message;
    this.status = reponseEntity.status;
    reponseEntity = reponseEntity.records;
  }
}
