import { TestBed } from '@angular/core/testing';

import { ApiMiddlewareService } from './api-middleware.service';

describe('ApiMiddlewareService', () => {
  let service: ApiMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
