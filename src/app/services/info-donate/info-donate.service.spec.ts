import { TestBed, inject } from '@angular/core/testing';

import { InfoDonateService } from './info-donate.service';

describe('InfoDonateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoDonateService]
    });
  });

  it('should be created', inject([InfoDonateService], (service: InfoDonateService) => {
    expect(service).toBeTruthy();
  }));
});
