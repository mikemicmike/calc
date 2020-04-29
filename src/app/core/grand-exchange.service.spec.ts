import { TestBed } from '@angular/core/testing';

import { GrandExchangeService } from './grand-exchange.service';

describe('GrandExchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrandExchangeService = TestBed.get(GrandExchangeService);
    expect(service).toBeTruthy();
  });
});
