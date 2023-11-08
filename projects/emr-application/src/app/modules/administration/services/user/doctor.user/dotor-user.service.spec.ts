import { TestBed } from '@angular/core/testing';

import { DotorUserService } from './dotor-user.service';

describe('DotorUserService', () => {
  let service: DotorUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotorUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
