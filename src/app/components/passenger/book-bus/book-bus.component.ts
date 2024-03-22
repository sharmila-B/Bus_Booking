import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../tickets';
import { TicketService } from '../../../tickets.service';
import { Passenger } from '../../../passenger';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusDetailsService } from '../../../bus-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-bus',
  templateUrl: './book-bus.component.html',
  styleUrls: ['./book-bus.component.css']
})
export class BookBusComponent implements OnInit{

  ticket: Ticket = new Ticket();
  passenger: Passenger = new Passenger();

  ticketForm!: FormGroup; // Initialize ticketForm as a FormGroup
  selectedBus: any;

  constructor(private actroute: ActivatedRoute, private ticketservice: TicketService, busdetailService: BusDetailsService, private router: Router, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.actroute.paramMap.subscribe(params => {
      // Retrieve the selected bus details from the route parameters
      this.selectedBus = window.history.state.busDetails;
      // Initialize the ticket form with the selected bus details
      this.initTicketForm();
    });
  }

  initTicketForm(): void {
    this.ticketForm = this.fb.group({
      passName: ['', [Validators.required]],
      passCount: ['', [Validators.required]],
      busNumber: [this.selectedBus.busNumber, [Validators.required]],
      source: [this.selectedBus.source, [Validators.required]],
      destination: [this.selectedBus.destination, [Validators.required]],
      journeyDate: [this.selectedBus.journeyDate, [Validators.required]],
      journeyTime: [this.selectedBus.journeyTime, [Validators.required]],
      ticketPrice: [this.selectedBus.ticketPrice, [Validators.required]],
    });
  }

  addTicket(): void {
    this.ticketservice.addTicket(this.ticketForm.value) // Send the entire form value
      .subscribe(
        (response) => {
          // Handle successful ticket addition response here
          console.log('Ticket added successfully:', response);
          // You may want to refresh the ticket list or show a success message
          alert("Ticket Booked Successfully! Click ok to view tickets you have booked");
          this.router.navigate(['/passenger/passenger-view-tickets']);
        },
        (error) => {
          // Handle error response here
          console.error('Failed to add ticket:', error);
          // You may want to display an error message to the user
        }
      );
  }
  calculateTicketPrice(): void {
    if (this.ticketForm) { // Check if ticketForm is not null
      const numberOfTickets = this.ticketForm.get('passCount')?.value; // Add null check using the safe navigation operator (?.)
      const ticketPrice = this.selectedBus?.ticketPrice; // Add null check using the safe navigation operator (?.)
      if (numberOfTickets && ticketPrice) {
        const totalPrice = numberOfTickets * ticketPrice;
        this.ticketForm.patchValue({ ticketPrice: totalPrice });
      }
    }
  }


/*  addTicket(): void {
    this.ticketservice.addTicket(this.ticket)
      .subscribe(
        (response) => {
          // Handle successful ticket addition response here
          console.log('Ticket added successfully:', response);
          // You may want to refresh the ticket list or show a success message
          alert("Ticket Booked Successfully! Click ok to view tickets you have booked");
        },
        (error) => {
          // Handle error response here
          console.error('Failed to add ticket:', error);
          // You may want to display an error message to the user
        }
      );
  } */

  /*updateTicket(ticket: Ticket): void {
    this.ticketservice.updateTicket(ticket)
      .subscribe(
        (response) => {
          // Handle successful ticket update response here
          console.log('Ticket updated successfully:', response);
          // You may want to refresh the ticket list or show a success message
        },
        (error) => {
          // Handle error response here
          console.error('Failed to update ticket:', error);
          // You may want to display an error message to the user
        }
      );
  } */



}

