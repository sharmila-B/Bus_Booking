import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './tickets';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private httpClient:HttpClient) { }

  private baseURL = "http://localhost:8080/api/tickets";

 /* addTicket(ticket: Ticket): Observable<Object> {
    const url = `${this.baseURL}/ticketBooking`;
    return this.httpClient.post<Ticket>(url, ticket);
  }*/

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(`${this.baseURL}/ticketBooking`, ticket);
  }

  updateTicket(ticket: any): Observable<any> {
    const url = `${this.baseURL}/updateTicket`;
    return this.httpClient.put<Ticket>(url, ticket);
  }

  findAll(): Observable<Ticket[]> {
    const url = `${this.baseURL}/`;
    return this.httpClient.get<Ticket[]>(url);
  }

  findById(ticketId: number): Observable<Ticket> {
    const url = `${this.baseURL}/${ticketId}`;
    return this.httpClient.get<Ticket>(url);
  }

  delete(ticketId: any): Observable<any> {
    const url = `${this.baseURL}/${ticketId}`;
    //return this.httpClient.delete<string>(url);
    return this.httpClient.delete(url, { responseType: 'text' });
  }
}
