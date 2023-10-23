import { TestBed } from '@angular/core/testing';

import { CancelNoShowService } from './cancel-no-show.service';

describe('CancelNoShowService', () => {
  let service: CancelNoShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelNoShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
