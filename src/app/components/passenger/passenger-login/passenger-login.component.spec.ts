import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerLoginComponent } from './passenger-login.component';

describe('PassengerLoginComponent', () => {
  let component: PassengerLoginComponent;
  let fixture: ComponentFixture<PassengerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
