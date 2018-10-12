import { TestBed, inject } from '@angular/core/testing';

import { CustomerInvntoryService } from './customer-invntory.service';

describe('CustomerInvntoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerInvntoryService]
    });
  });

  it('should be created', inject([CustomerInvntoryService], (service: CustomerInvntoryService) => {
    expect(service).toBeTruthy();
  }));
});
