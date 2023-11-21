import { TestBed } from '@angular/core/testing';

import { AppointmentEventConverterService } from './appointment-event-converter.service';

describe('AppointmentEventConverterService', () => {
  let service: AppointmentEventConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentEventConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
