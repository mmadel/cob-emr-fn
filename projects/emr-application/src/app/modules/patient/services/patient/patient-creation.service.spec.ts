import { TestBed } from '@angular/core/testing';

import { PatientCreationService } from './patient-creation.service';

describe('PatientCreationService', () => {
  let service: PatientCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
