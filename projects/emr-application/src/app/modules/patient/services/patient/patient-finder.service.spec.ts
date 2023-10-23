import { TestBed } from '@angular/core/testing';

import { PatientFinderService } from './patient-finder.service';

describe('PatientFinderService', () => {
  let service: PatientFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
