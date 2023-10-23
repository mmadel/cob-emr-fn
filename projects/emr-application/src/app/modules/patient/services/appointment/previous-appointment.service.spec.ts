import { TestBed } from '@angular/core/testing';

import { PreviousAppointmentService } from './previous-appointment.service';

describe('PreviousAppointmentService', () => {
  let service: PreviousAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
