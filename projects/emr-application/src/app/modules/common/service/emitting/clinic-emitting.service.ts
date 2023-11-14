import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clinic } from '../../../patient/models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicEmittingService {
  public selectedClinic$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  constructor() { }
}
