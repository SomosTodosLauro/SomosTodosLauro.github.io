import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauroComponent } from './lauro.component';

describe('LauroComponent', () => {
  let component: LauroComponent;
  let fixture: ComponentFixture<LauroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
