import { TestBed } from '@angular/core/testing';

import { FacialHairService } from './facial-hair.service';

describe('FacialHairService', () => {
  let service: FacialHairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacialHairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
