import { TestBed } from '@angular/core/testing';

import { APIControllerService } from './apicontroller.service';

describe('APIControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIControllerService = TestBed.get(APIControllerService);
    expect(service).toBeTruthy();
  });
});
