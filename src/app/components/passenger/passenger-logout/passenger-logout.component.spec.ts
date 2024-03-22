import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerLogoutComponent } from './passenger-logout.component';

describe('PassengerLogoutComponent', () => {
  let component: PassengerLogoutComponent;
  let fixture: ComponentFixture<PassengerLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerLogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengerLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
