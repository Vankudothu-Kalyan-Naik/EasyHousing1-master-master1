import { TestBed } from '@angular/core/testing';

import { BuyPropertyService } from './buyproperty.service';

describe('BuypropertyService', () => {
  let service: BuyPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
