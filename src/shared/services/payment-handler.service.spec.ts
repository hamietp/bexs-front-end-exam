import { TestBed } from '@angular/core/testing';

import { PaymentHandlerService } from './payment-handler.service';

describe('PaymentHandlerService', () => {
  let service: PaymentHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
