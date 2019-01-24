import { TestBed, inject } from '@angular/core/testing';

import { DonateServiceService } from './donate-service.service';

describe('DonateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonateServiceService]
    });
  });

  it('should be created', inject([DonateServiceService], (service: DonateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
