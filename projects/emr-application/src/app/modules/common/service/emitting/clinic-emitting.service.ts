import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clinic } from '../../../patient/models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicEmittingService {
  public selectedClinic$: BehaviorSubject<Clinic | null> = new BehaviorSubject<Clinic | null>(null);
  constructor() { }
}
