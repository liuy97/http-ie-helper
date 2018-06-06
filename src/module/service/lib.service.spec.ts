import { TestBed, inject } from '@angular/core/testing';

import { HttpIEHelperInterceptor } from './lib.service';

describe('HttpIEHelperInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpIEHelperInterceptor]
    });
  });

  it('should create service', inject([HttpIEHelperInterceptor], (service: HttpIEHelperInterceptor) => {
    expect(service).toBeTruthy();
  }));

});
