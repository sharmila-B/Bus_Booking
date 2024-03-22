import { Component } from '@angular/core';
import { PassengerService } from '../../../passenger.service';
import { Passenger } from '../../../passenger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-signup',
  templateUrl: './passenger-signup.component.html',
  styleUrl: './passenger-signup.component.css'
})
export class PassengerSignupComponent {
  passenger: Passenger = {
    passName: '',
    emailId: '',
    phoneNumber: '',
    password: '',
    bus: undefined
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
  
  constructor(private passengerService: PassengerService, private router: Router) { }
  
  ngOnInit(): void { }

  registerPassenger(): void {

     // Reset error message
     this.emailerror = '';
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!emailRegex.test(this.passenger.emailId)) {
       this.emailerror = "Please enter a valid email address";
       return;
     }
 
     this.passworderror = '';
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
     if(!passwordRegex.test(this.passenger.password)){
       this.passworderror = "Password must contain at least 1 uppercase, 1 lowercase, and 1 digit";
       return;
     }

    this.passengerService.registerPassenger(this.passenger)
      .subscribe(
        (response) => {
          console.log('Passenger registered successfully:', response);
          // You may want to redirect the user or show a success message
          alert("Registration sucessful");
          this.router.navigate(['/passenger-login']);
        },
        (error) => {
          console.error('Failed to register passenger:', error);
          // You may want to display an error message to the user
          alert("Registration failed");
        }
      );
  }
  validateName(): void {
    // Mark name field as touched
    this.nameTouched = true;
    // Check if name is empty
    this.nameInvalid = !this.passenger.passName || this.passenger.passName.length < 3;
  }

  validateEmail(): void {
    // Mark email field as touched
    this.emailTouched = true;
    // Check if email is empty
    this.emailInvalid = !this.passenger.emailId ;
  }

  validatePhoneNo(): void {
    // Mark phone number field as touched
    this.phoneTouched = true;
    // Check if phone number is empty
    this.phoneInvalid = !this.passenger.phoneNumber || this.passenger.phoneNumber.length !== 10;
  }

  validatePassword(): void {
    // Mark password field as touched
    this.passwordTouched = true;
    // Check if password is empty
    this.passwordInvalid = !this.passenger.password;
  }


  }