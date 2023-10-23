import { TestBed } from '@angular/core/testing';

import { PatientFinderPaginationService } from './patient-finder-pagination.service';

describe('PatientFinderPaginationService', () => {
  let service: PatientFinderPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientFinderPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
