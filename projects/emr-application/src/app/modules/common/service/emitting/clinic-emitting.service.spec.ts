import { TestBed } from '@angular/core/testing';

import { ClinicEmittingService } from './clinic-emitting.service';

describe('ClinicEmittingService', () => {
  let service: ClinicEmittingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicEmittingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
