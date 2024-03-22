import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerService } from '../../../passenger.service';
import { take } from 'rxjs';
import { Passenger } from '../../../passenger';


@Component({
  selector: 'app-passenger-login',
  templateUrl: './passenger-login.component.html',
  styleUrl: './passenger-login.component.css'
})
export class PassengerLoginComponent implements OnInit {

  emailId: string = '';
  password: string = '';
  errormessage: string = ''; // Consolidated error message variable
  invalidmessage: string = '';
  emailInvalid: boolean = false;
  emailTouched: boolean = false;
  passwordInvalid: boolean = false;
  passwordTouched: boolean = false;

  constructor(
    private router: Router,
    private passengerService: PassengerService
  ) { }

  ngOnInit(): void { }

  login(): void {
    this.errormessage = ''; // Reset error message

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(this.emailId)) {
      this.errormessage = "Please enter a valid email address";
      return;
    }

    this.passengerService.getPassengerByEmailId(this.emailId).subscribe(
      (passenger: Passenger) => {
        console.log("Paseenger Data:", passenger);
        if (!passenger) {
          this.errormessage = "Email address not registered";
        } else {

          this.passengerService.loginPassenger(this.emailId, this.password).pipe(take(1)).subscribe(
            (res: any) => {
              console.log("Response Data:", res);
              if (res && res.passId) {
                alert("Login successful");
                this.passengerService.storeUserRole('passenger');
                this.router.navigate(['/passenger/passenger-home']);
              }
              else {
                // Invalid email/password combination
                this.invalidmessage = "Invalid email/password combination";
              }
            },
            (err: any) => {
              console.error("Error during login:", err);
              alert("Error during login. Please try again.");
            }
          );
        }
      },
      (error) => {
        console.error('Error checking email:', error);
        // Handle error, maybe show a message to the user
      }
    );
  }

  validateEmail(): void {
    this.emailTouched = true;
    this.emailInvalid = !this.emailId.trim();
  }

  validatePassword(): void {
    this.passwordTouched = true;
    this.passwordInvalid = !this.password.trim();
  }

  signup() {
    this.router.navigate(['passenger/passenger-signup']);

  }
}


