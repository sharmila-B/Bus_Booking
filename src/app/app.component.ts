// app.component.ts

import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { AdminService } from './admin.service';
import { PassengerService } from './passenger.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bus-booking-pro';
  isAdminLoggedIn: boolean = false;
  isPassengerLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private adminService: AdminService,
    private passengerService: PassengerService
  ) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      const adminUserRole = this.adminService.getUserRole();
      const passengerUserRole = this.passengerService.getUserRole();
      this.isAdminLoggedIn = adminUserRole === 'admin';
      this.isPassengerLoggedIn = passengerUserRole === 'passenger';
    });
  }
}
