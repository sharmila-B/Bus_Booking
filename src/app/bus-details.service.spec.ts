import { TestBed } from '@angular/core/testing';

import { BusDetailsService } from './bus-details.service';

describe('BusDetailsService', () => {
  let service: BusDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
