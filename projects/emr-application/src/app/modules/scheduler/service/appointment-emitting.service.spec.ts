import { TestBed } from '@angular/core/testing';

import { AppointmentEmittingService } from './appointment-emitting.service';

describe('AppointmentEmittingService', () => {
  let service: AppointmentEmittingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentEmittingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
