import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { Admin } from '../../../admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  emailId: string = '';
  password: string = '';
  errormessage: string = ''; // Consolidated error message variable
  invalidmessage: string = '';
  emailInvalid: boolean = false;
  emailTouched: boolean = false;
  passwordInvalid: boolean = false;
  passwordTouched: boolean = false;

  constructor(private router: Router, private adminservice: AdminService) { }

  ngOnInit(): void { }

  login(): void {
    this.errormessage = ''; // Reset error message

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(this.emailId)) {
      this.errormessage = "Please enter a valid email address";
      return;
    }

    // Check if the email exists
    this.adminservice.getAdminByEmail(this.emailId).subscribe(
      (admin: Admin) => {
        console.log("Admin Data:", admin);
        if (!admin) {
          this.errormessage = "Email address not registered";
        } else {
          // Email exists, attempt login
          this.adminservice.loginAdmin(this.emailId, this.password).subscribe(
            (res: any) => {
              console.log("Response Data:", res);
              if (res && res.adminId) {
                alert("Login successful");
                this.adminservice.storeUserRole('admin');
                this.router.navigate(['/admin/admin-home']);
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

  signup(): void {
    this.router.navigate(["/admin/admin-signup"]);
  }
}
