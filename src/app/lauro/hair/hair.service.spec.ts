import { TestBed } from '@angular/core/testing';

import { HairService } from './hair.service';

describe('HairService', () => {
  let service: HairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
