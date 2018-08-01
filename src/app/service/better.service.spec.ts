import { TestBed, inject } from '@angular/core/testing';

import { BetterService } from './better.service';

describe('BetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetterService]
    });
  });

  it('should be created', inject([BetterService], (service: BetterService) => {
    expect(service).toBeTruthy();
  }));
});
