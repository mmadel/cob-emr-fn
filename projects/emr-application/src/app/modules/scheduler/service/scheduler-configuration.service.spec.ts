import { TestBed } from '@angular/core/testing';

import { SchedulerConfigurationService } from './scheduler-configuration.service';

describe('SchedulerConfigurationService', () => {
  let service: SchedulerConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulerConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
