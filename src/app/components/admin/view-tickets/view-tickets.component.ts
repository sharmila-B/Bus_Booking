import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../tickets.service';
import { Ticket } from '../../../tickets';
import { BusDetails,Passenger } from '../../../passenger';



@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrl: './view-tickets.component.css'
})
export class ViewTicketsComponent implements OnInit {
  bookedTickets: Ticket[] = [];
  bus:BusDetails=new BusDetails();
  passenger:Passenger=new Passenger();

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadBookedTickets();
  }

  loadBookedTickets(): void {
    this.ticketService.findAll().subscribe(
      (tickets) => {
        this.bookedTickets = tickets;
      },
      (error) => {
        console.error('Error fetching booked tickets:', error);
        alert("Oops! Couldn't fetch booked tickets");
      }
    );
  }
  deleteTicket(ticketId: any): void {
    this.ticketService.delete(ticketId).subscribe(
      () => {
        console.log(`Ticket with ID ${ticketId} deleted successfully.`);
        this.bookedTickets = this.bookedTickets.filter(ticket => ticket.ticketId !== ticketId);
        alert("Ticket cancelled succesfully");
      },
      (error) => {
        console.error('Error deleting ticket:', error);
        alert("Couldn't find ticketId");
      }
    );
  }

  
}