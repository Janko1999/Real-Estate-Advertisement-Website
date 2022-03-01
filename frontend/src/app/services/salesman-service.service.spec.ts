import { TestBed } from '@angular/core/testing';

import { SalesmanServiceService } from './salesman-service.service';

describe('SalesmanServiceService', () => {
  let service: SalesmanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesmanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
