import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private httpClient: HttpClient, private route:Router) { }

  private baseURL = "http://localhost:8080/api/admins";

  registerAdmin(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(`${this.baseURL}/registerAdmin`, admin);
  }


  loginAdmin(emailId: string, password: string): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.baseURL}/loginAdmin/${emailId}/${password}`);
  }

  getAllAdmin(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(`${this.baseURL}/getAllAdmin`);
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.baseURL}/getAdminById/${adminId}`);
  }

  getAdminByEmail(emailId: string): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.baseURL}/getAdminByEmail/${emailId}`);
  }

  updateAdminPassword(adminId: any, newPassword: string): Observable<any> {
    return this.httpClient.put<Admin>(`${this.baseURL}/updateAdminPassword/${adminId}/${newPassword}`, null);
  }

  updateAdminById(adminId: any, admin: Admin): Observable<any> {
    return this.httpClient.put<Admin>(`${this.baseURL}/updateAdminById/${adminId}`, admin);
  }

  deleteAdminById(adminId: any): Observable<any> {
    return this.httpClient.delete<string>(`${this.baseURL}/deleteAdminById/${adminId}`);
  }

/*
  // Add methods to handle user role locally
  storeUserRole(role: string): void {
    localStorage.setItem("userRole", role);
  }

  getUserRole(): string | null {
    return localStorage.getItem("userRole");
  }

  clearUserRole(): void {
    localStorage.removeItem("userRole");
  }

  // Add method to check if user is logged in
  isAdminLoggedIn(): boolean {
    return !!this.getUserRole();
  }

  // Add method to handle logout
  logout(): void {
    this.clearUserRole();
    this.route.navigate(['/login']);
  }*/


  private userRoleKey = "adminRole"; // Using the key "adminRole" for storing user role

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

  adminlogout(): void {
    this.clearUserRole();
    // Additional logout logic here
    this.route.navigate(['/']);
  }



  storeAdminAuthorization(token: string): void {
    localStorage.setItem("admin", token);
  }
  getAdminAuthorization(): any {
    const token = localStorage.getItem("admin");
    return token;
  }

  storeAdminUserName(name: string): void {
    localStorage.setItem("adminName", name);
  }

  getAdminName(): any {
    const name = localStorage.getItem("adminName");
    return name;
  }

  adminLogout(): void {
    localStorage.clear();
    this.route.navigate(['/']);
  }


}
