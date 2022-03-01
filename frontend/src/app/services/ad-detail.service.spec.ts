import { TestBed } from '@angular/core/testing';

import { AdDetailService } from './ad-detail.service';

describe('AdDetailService', () => {
  let service: AdDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
