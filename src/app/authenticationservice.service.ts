import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  private isLoggedIn: boolean = false;

  constructor(private router: Router,private httpClient : HttpClient) { }
  private baseURL1 = "http://localhost:8080/api/admins";
  private baseURL2 = "http://localhost:8080/api/passengers";

  adminlogin(emailId: string, password: string): Observable<boolean> {
    // Assuming you perform some authentication logic here
    // For demonstration purposes, let's assume a simple username/password check
    if (emailId === 'admin.emailId' && password === 'admin.password') {
      // Redirect to admin dashboard after successful login
      this.router.navigate(['/admin/admin-home']);
      return of(true); // Emit true if login is successful
    } else {
      return of(false); // Emit false if login fails
    }
  }

  adminlogout(): void {
    // Clear any authentication-related data or tokens
    this.isLoggedIn = false;
    // Redirect to login page after logout
    this.router.navigate(['/']);
  }

  isAuthenticatedAdmin(): boolean {
    return this.isLoggedIn;
  }

  passengerlogin(emailId: string, password: string): Observable<boolean> {
    // Assuming you perform some authentication logic here
    // For demonstration purposes, let's assume a simple username/password check
    if (emailId === 'admin.emailId' && password === 'admin.password') {
      // Redirect to admin dashboard after successful login
      this.router.navigate(['/admin/dashboard']);
      return of(true); // Emit true if login is successful
    } else {
      return of(false); // Emit false if login fails
    }
  }

  passengerlogout(): void {
    // Clear any authentication-related data or tokens
    this.isLoggedIn = false;
    // Redirect to login page after logout
    this.router.navigate(['/admin/login']);
  }

  isAuthenticatedPassenger(): boolean {
    return this.isLoggedIn;
  }
}
