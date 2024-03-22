import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewTicketsComponent } from './passenger-view-tickets.component';

describe('PassengerViewTicketsComponent', () => {
  let component: PassengerViewTicketsComponent;
  let fixture: ComponentFixture<PassengerViewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerViewTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengerViewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
