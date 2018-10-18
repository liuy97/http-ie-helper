import { TestBed } from '@angular/core/testing';

import { HttpIEHelperInterceptor } from './ie-helper.service';

describe('HttpIEHelperInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIEHelperInterceptor = TestBed.get(HttpIEHelperInterceptor);
    expect(service).toBeTruthy();
  });
});
