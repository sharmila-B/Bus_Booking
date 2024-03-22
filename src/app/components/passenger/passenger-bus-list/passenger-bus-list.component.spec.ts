import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerBusListComponent } from './passenger-bus-list.component';

describe('PassengerBusListComponent', () => {
  let component: PassengerBusListComponent;
  let fixture: ComponentFixture<PassengerBusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerBusListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengerBusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
