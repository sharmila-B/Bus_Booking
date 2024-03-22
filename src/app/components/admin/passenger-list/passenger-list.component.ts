import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../../passenger';
import { PassengerService } from '../../../passenger.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  passengers: Passenger[] = [];
  passenger: any = {};
  source: string = '';
  destination: string = '';
  arrivalDateTime: string = '';
  passId: any | undefined;

  showTable: boolean = false; // Track visibility of passenger list table
  showPassengerDetailsById: boolean = false; // Track visibility of passenger details by Id
  showPassengerDetailsBySourceDestination: boolean = false; // Track visibility of passenger details by Id

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.getAllPassengers();
  }

  public getAllPassengers() {
    this.passengerService.getAllPassengers().subscribe(data => {
      this.passengers = data;
    });
  }

  toggleTable() {
    this.showTable = !this.showTable;
  this.showPassengerDetailsById = false;
  this.showPassengerDetailsBySourceDestination = false;
  this.passenger = {}; // Reset the passenger object
  this.source = ''; // Reset source field
  this.destination = ''; // Reset destination field
  }

  getPassengerById(): void {
    this.passengerService.getPassengerById(this.passId).subscribe(
      (passenger: Passenger) => {
        console.log('Passenger:', passenger);
        this.passenger = passenger; // Assign found passenger details
        this.showPassengerDetailsById = true; // Show passenger details
        this.showPassengerDetailsBySourceDestination = false;
      },
      (error: any) => {
        console.error('Error fetching passenger details:', error);
        this.passenger = {}; // Reset passenger object if not found
      this.showPassengerDetailsById = false; // Hide passenger details
      this.showPassengerDetailsBySourceDestination = false;
      }
    );
  }

  getPassengersBySourceAndDestination(): void {
    this.passengerService.getPassengersBySourceAndDestination(this.source, this.destination)
      .subscribe((passenger: any) => {
        // Handle the response from the service if needed
        console.log(passenger);
        this.passenger = passenger;
        this.showPassengerDetailsById = false;
        this.showPassengerDetailsBySourceDestination = true; // Show passenger details
      });
  }

  getPassengersByArrivalDateTime(): void {
    this.passengerService.getPassengersByArrivalDateTime(this.arrivalDateTime)
      .subscribe((passengers: any) => {
        // Handle the response from the service if needed
        console.log(passengers);
      });
  }
}
