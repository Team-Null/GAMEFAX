import { TestBed } from '@angular/core/testing';

import { EbayService } from './ebay.service';

describe('EbayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EbayService = TestBed.get(EbayService);
    expect(service).toBeTruthy();
  });
});
