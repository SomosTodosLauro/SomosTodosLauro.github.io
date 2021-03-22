import { TestBed } from '@angular/core/testing';

import { MouthService } from './mouth.service';

describe('MouthService', () => {
  let service: MouthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
