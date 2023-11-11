import { TestBed } from '@angular/core/testing';

import { DoctorUserService } from './doctor-user.service';

describe('DoctorUserService', () => {
  let service: DoctorUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
