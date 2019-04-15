import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhoneNumberComponent } from './create-phone-number.component';

describe('CreatePhoneNumberComponent', () => {
  let component: CreatePhoneNumberComponent;
  let fixture: ComponentFixture<CreatePhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
