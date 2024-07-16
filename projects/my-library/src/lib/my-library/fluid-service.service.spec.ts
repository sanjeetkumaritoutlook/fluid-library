import { TestBed } from '@angular/core/testing';

import { FluidServiceService } from './fluid-service.service';

describe('FluidServiceService', () => {
  let service: FluidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
