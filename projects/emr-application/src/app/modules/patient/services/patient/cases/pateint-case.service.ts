import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PateintCaseService {
  public selectedCase$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  constructor() { }
}
