import { TestBed } from '@angular/core/testing';

import { QuotesCountService } from './quotes-count.service';

describe('QuotesCountService', () => {
  let service: QuotesCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
