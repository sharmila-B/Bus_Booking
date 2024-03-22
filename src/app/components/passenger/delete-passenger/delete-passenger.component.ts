import { Component } from '@angular/core';
import { PassengerService } from '../../../passenger.service';

@Component({
  selector: 'app-delete-passenger',
  templateUrl: './delete-passenger.component.html',
  styleUrl: './delete-passenger.component.css'
})
export class DeletePassengerComponent {

  getAllPassengers: any;
  passenger: any;
  passengerForm: any;
  passId: any;

  constructor(private passengerservice: PassengerService) { }

  ngOnInit(): void {
    this.getAllPassengers();
  }


  deletePassengerById(passId: any): void {
    this.passengerservice.deletePassengerById(passId).subscribe(
      (response: any) => {
        console.log('Delete response:', response);
        this.getAllPassengers();
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }


}
