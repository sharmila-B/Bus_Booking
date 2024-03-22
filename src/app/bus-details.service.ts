import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDetails } from './bus-details';

@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {

  constructor(private httpClient:HttpClient) { }

  private baseURL = "http://localhost:8080/api/BusDetails";

  saveBusDetails(bus: BusDetails): Observable<Object> {
    const url = `${this.baseURL}/savebus`;
    return this.httpClient.post<BusDetails>(url, bus);
  }

  getBusByNumber(busNumber: number): Observable<BusDetails> {
    const url = `${this.baseURL}/${busNumber}`;
    return this.httpClient.get<BusDetails>(url);
  }

  findAll(): Observable<BusDetails[]> {
    const url = `${this.baseURL}/Allbuses`;
    return this.httpClient.get<BusDetails[]>(url);
  }

  deleteBusByNumber(busNumber: any): Observable<any> {
    const url = `${this.baseURL}/delete/${busNumber}`;
    return this.httpClient.delete<string>(url);
  }

  updateBusDetails(bus: any): Observable<any> {
    const url = `${this.baseURL}/updateBus`;
    return this.httpClient.put<BusDetails>(url, bus);
  }

  getBusBySourceAndDestination(source: string, destination: string): Observable<BusDetails[]> {
    const url = `${this.baseURL}/${source}/${destination}`;
    return this.httpClient.get<BusDetails[]>(url);
  }

}
