import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSignupComponent } from './passenger-signup.component';

describe('PassengerSignupComponent', () => {
  let component: PassengerSignupComponent;
  let fixture: ComponentFixture<PassengerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
