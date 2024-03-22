import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../tickets';
import { TicketService } from '../../tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] | undefined;
  newTicket: Ticket = new Ticket();
  selectedTicket: Ticket | undefined;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.findAll().subscribe(
      tickets => {
        this.tickets = tickets;
      },
      error => {
        console.log('Error occurred while fetching tickets: ', error);
      }
    );
  }

  addTicket() {
    this.ticketService.addTicket(this.newTicket).subscribe(
      response => {
        console.log('Ticket added successfully.');
        this.loadTickets(); // Reload tickets after adding a new one
        this.newTicket = new Ticket(); // Clear the newTicket object for next entry
      },
      error => {
        console.log('Error occurred while adding ticket: ', error);
      }
    );
  }

  updateTicket(ticket: Ticket) {
    this.ticketService.updateTicket(ticket).subscribe(
      response => {
        console.log('Ticket updated successfully.');
        this.loadTickets(); // Reload tickets after updating
      },
      error => {
        console.log('Error occurred while updating ticket: ', error);
      }
    );
  }

  deleteTicket(ticketId: number) {
    this.ticketService.delete(ticketId).subscribe(
      response => {
        console.log('Ticket deleted successfully.');
        this.loadTickets(); // Reload tickets after deletion
      },
      error => {
        console.log('Error occurred while deleting ticket: ', error);
      }
    );
  }

  selectTicket(ticket: Ticket) {
    this.selectedTicket = ticket;
  }
}
