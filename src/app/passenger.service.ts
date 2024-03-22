import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from './passenger';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PassengerService {
 
  
  constructor(private httpClient:HttpClient, private route: Router) { }

  private baseURL = "http://localhost:8080/api/passengers";

  registerPassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.post<Passenger>(`${this.baseURL}/registerPassenger`, passenger);
  }

  loginPassenger(emailId: string, password: string): Observable<Passenger> {
    return this.httpClient.get<Passenger>(`${this.baseURL}/loginPassenger/${emailId}/${password}`);
  }

  getAllPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(`${this.baseURL}/getAllPassengers`);
  }

  getPassengerByEmailId(emailId: string): Observable<Passenger> {
    return this.httpClient.get<Passenger>(`${this.baseURL}/getPassengerByEmailId/${emailId}`);
  }

  getPassengerById(passId: number): Observable<Passenger> {
    return this.httpClient.get<Passenger>(`${this.baseURL}/getPassengerById/${passId}`);
  }

  updatePassengerById(passId: any, passenger: Passenger): Observable<any> {
    return this.httpClient.put<Passenger>(`${this.baseURL}/updatePassengerById/${passId}`, passenger);
  }

  deletePassengerById(passId: any): Observable<any> {
    return this.httpClient.delete<string>(`${this.baseURL}/deletePassengerById/${passId}`);
  }

  getPassengersBySourceAndDestination(source: string, destination: string): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(`${this.baseURL}/${source}/${destination}`);
  }

  getPassengersByArrivalDateTime(arrivalDateTime: string): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(`${this.baseURL}/${arrivalDateTime}`);
 
  }
/*
  storeUserRole(role: string): void {
    localStorage.setItem("userRole", role);
  }

  getUserRole(): string | null {
    return localStorage.getItem("userRole");
  }

  clearUserRole(): void {
    localStorage.removeItem("userRole");
  }

  isLoggedIn(): boolean {
    return !!this.getUserRole();
  }

  logout(): void {
    this.clearUserRole();
    // Add your logout logic here (if any)
  } */

  private userRoleKey = "passengerRole"; // Using the key "passengerRole" for storing user role

  // Define other methods...

  storeUserRole(role: string): void {
    localStorage.setItem(this.userRoleKey, role);
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.userRoleKey);
  }

  clearUserRole(): void {
    localStorage.removeItem(this.userRoleKey);
  }

  isLoggedIn(): boolean {
    return !!this.getUserRole();
  }

  passengerlogout(): void {
    this.clearUserRole();
    // Additional logout logic here
    this.route.navigate(['/']);
  }
  
}
