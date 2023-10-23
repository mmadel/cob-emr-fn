import { TestBed } from '@angular/core/testing';

import { PateintCaseService } from './pateint-case.service';

describe('PateintCaseService', () => {
  let service: PateintCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PateintCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
