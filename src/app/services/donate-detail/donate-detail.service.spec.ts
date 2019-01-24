import { TestBed, inject } from '@angular/core/testing';

import { DonateDetailService } from './donate-detail.service';

describe('DonateDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonateDetailService]
    });
  });

  it('should be created', inject([DonateDetailService], (service: DonateDetailService) => {
    expect(service).toBeTruthy();
  }));
});
