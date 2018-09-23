import { TestBed } from '@angular/core/testing';

import { APICollectorService } from './apicollector.service';

describe('APICollectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APICollectorService = TestBed.get(APICollectorService);
    expect(service).toBeTruthy();
  });
});
