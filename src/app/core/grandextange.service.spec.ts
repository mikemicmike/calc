import { TestBed } from '@angular/core/testing';

import { GrandextangeService } from './grandextange.service';

describe('GrandextangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrandextangeService = TestBed.get(GrandextangeService);
    expect(service).toBeTruthy();
  });
});
