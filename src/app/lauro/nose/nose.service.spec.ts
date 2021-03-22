import { TestBed } from '@angular/core/testing';

import { NoseService } from './nose.service';

describe('NoseService', () => {
  let service: NoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
