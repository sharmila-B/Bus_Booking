import { Component } from '@angular/core';
import { PassengerService } from '../../../passenger.service';

@Component({
  selector: 'app-passenger-logout',
  templateUrl: './passenger-logout.component.html',
  styleUrl: './passenger-logout.component.css'
})
export class PassengerLogoutComponent {
  constructor(private passengerservice: PassengerService, ) { }

  logout(): void {
    this.passengerservice.passengerlogout();
    console.log("Logged out successfully");
  }

}
