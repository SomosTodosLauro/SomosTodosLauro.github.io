import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialHairComponent } from './facial-hair.component';

describe('FacialHairComponent', () => {
  let component: FacialHairComponent;
  let fixture: ComponentFixture<FacialHairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacialHairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
