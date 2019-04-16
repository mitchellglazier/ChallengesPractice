import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseANumberComponent } from './reverse-anumber.component';

describe('ReverseANumberComponent', () => {
  let component: ReverseANumberComponent;
  let fixture: ComponentFixture<ReverseANumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseANumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseANumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
