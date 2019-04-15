import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumArraysComponent } from './sum-arrays.component';

describe('SumArraysComponent', () => {
  let component: SumArraysComponent;
  let fixture: ComponentFixture<SumArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
