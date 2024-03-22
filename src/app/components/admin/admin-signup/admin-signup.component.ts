import { Component } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { Router } from '@angular/router';
import { Admin } from '../../../admin';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {
  admin: Admin = {
    name: '',
    emailId: '',
    phoneNumber: '',
    password: ''
  };
  emailerror: string = '';
  passworderror: string = '';

  nameInvalid: boolean = false;
  nameTouched: boolean = false;

  emailInvalid: boolean = false;
  emailTouched: boolean = false;

  phoneInvalid: boolean = false;
  phoneTouched: boolean = false;

  passwordInvalid: boolean = false;
  passwordTouched: boolean = false;


  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void { }

  registerAdmin(): void {
    // Reset error message
    this.emailerror = '';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.admin.emailId)) {
      this.emailerror = "Please enter a valid email address";
      return;
    }

    this.passworderror = '';
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!passwordRegex.test(this.admin.password)){
      this.passworderror = "Password must contain at least 1 uppercase, 1 lowercase, and 1 digit";
      return;
    }

    // Add additional validation logic here if needed

    // Proceed with registration if all fields are filled
    this.adminService.registerAdmin(this.admin)
      .subscribe(
        (response) => {
          console.log('Registered successfully:', response);
          alert("Registration successful");
          this.router.navigate(['/admin-login']);
        },
        (error) => {
          console.error('Failed to register:', error);
          alert("Registration failed");
        }
      );
  }

  validateName(): void {
    // Mark name field as touched
    this.nameTouched = true;
    // Check if name is empty
    this.nameInvalid = !this.admin.name || this.admin.name.length < 3;
  }

  validateEmail(): void {
    // Mark email field as touched
    this.emailTouched = true;
    // Check if email is empty
    this.emailInvalid = !this.admin.emailId ;
  }

  validatePhoneNo(): void {
    // Mark phone number field as touched
    this.phoneTouched = true;
    // Check if phone number is empty
    this.phoneInvalid = !this.admin.phoneNumber || this.admin.phoneNumber.length !== 10;
  }

  validatePassword(): void {
    // Mark password field as touched
    this.passwordTouched = true;
    // Check if password is empty
    this.passwordInvalid = !this.admin.password;
  }
}
