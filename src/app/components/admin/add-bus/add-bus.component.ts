import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusDetails } from '../../../bus-details';
import { BusDetailsService } from '../../../bus-details.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrl: './add-bus.component.css'
})
export class AddBusComponent implements OnInit {

  busdetails: BusDetails = new BusDetails();
  busdetailsForm!: FormGroup;


  constructor(private busdetailservice: BusDetailsService,
    private router: Router, private fb: FormBuilder) {
    this.busdetailsForm = this.fb.group({
      source: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      totalSeats: ['', [Validators.required]],
      availableSeats: ['', [Validators.required]],
      journeyDate: ['', [Validators.required]],
      journeyTime: ['', [Validators.required]],
      ticketPrice: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }

  goToBusDetailsList() {
    this.router.navigate(['/admin/bus-list']);
  }

  onSubmit(): void {
    if (this.busdetailsForm.valid) {
      this.busdetailservice.saveBusDetails(this.busdetailsForm.value).subscribe(
        (response) => {
          console.log('Bus added successfully:', response);
          alert("Bus added successfully!");
          this.goToBusDetailsList();
          // You can add further actions, like showing a success message or redirecting the user
        },
        (error) => {
          console.error('Error added bus:', error);
          // Handle the error, show an error message, etc.
        }
      );
    }
  }
  onReset(): void {
    this.busdetailsForm.reset();
  }

}
