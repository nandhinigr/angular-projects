import { TestBed } from '@angular/core/testing';

import { FullserviceService } from './fullservice.service';

describe('FullserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullserviceService = TestBed.get(FullserviceService);
    expect(service).toBeTruthy();
  });
});
