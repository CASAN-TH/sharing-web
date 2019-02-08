import { TestBed, inject } from '@angular/core/testing';

import { DonateHistoryService } from './donate-history.service';

describe('DonateHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonateHistoryService]
    });
  });

  it('should be created', inject([DonateHistoryService], (service: DonateHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
