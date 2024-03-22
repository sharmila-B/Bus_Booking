import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDetails } from '../../bus-details';
import { BusDetailsService } from '../../bus-details.service';
import { Router } from '@angular/router';
import { PassengerService } from '../../passenger.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrl: './bus-details.component.css'
})
export class BusDetailsComponent implements OnInit {
  buses: BusDetails[] = [];
  bus: any = {};
  errormessage: string = '';

  constructor(private busdetailservice: BusDetailsService, private route: Router, private passengerservice: PassengerService) { }

  ngOnInit(): void {
    this.findAllBuses();
  }

  findAllBuses(): void {
    this.busdetailservice.findAll().subscribe(
      (buses: BusDetails[]) => {
        console.log(buses);
        this.buses = buses;
      },
      (error) => {
        console.error('Error fetching buses:', error);
        this.errormessage = 'Failed to fetch buses. Please try again later.';
      }
    );
  }

  bookTicket(bus: BusDetails): void {
    // Check if passenger is logged in (you can replace this with your actual authentication logic)
    const isLoggedIn = this.passengerservice.isLoggedIn(); // Replace this with your actual authentication check

    // Navigate based on login status
    if (isLoggedIn) {
      this.route.navigate(['/passenger/book-bus'], { state: { busDetails: bus } }); // Navigate to book bus page
    } else {
      alert("Login to book a ticket!");
      this.route.navigate(['/passenger-login']); // Navigate to login page
    }
  }
}

