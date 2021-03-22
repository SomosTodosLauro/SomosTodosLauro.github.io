import { TestBed } from '@angular/core/testing';

import { EyesService } from './eyes.service';

describe('EyesService', () => {
  let service: EyesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EyesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
