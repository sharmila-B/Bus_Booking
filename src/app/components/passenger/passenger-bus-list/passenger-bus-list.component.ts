import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDetails } from '../../../bus-details';
import { BusDetailsService } from '../../../bus-details.service';

@Component({
  selector: 'app-passenger-bus-list',
  templateUrl: './passenger-bus-list.component.html',
  styleUrl: './passenger-bus-list.component.css'
})
export class PassengerBusListComponent implements OnInit{

  buses$: Observable<BusDetails[]> | undefined; 
  buses: any;
bus: any;
source: any ;
destination: any ;

  constructor(private busdetailservice:BusDetailsService){}
  ngOnInit(): void {
   
    this.findAllBuses();
  }

  
  findAllBuses(): void {
    this.busdetailservice.findAll().subscribe(
      (buses: BusDetails[]) => {
        console.log(buses); 
      },
      (error) => {
        console.error('Error fetching buses:', error);
      }
    );
  }

  getBusByNumber(busNumber: number): void {
    this.busdetailservice.getBusByNumber(busNumber).subscribe(
      (bus: BusDetails) => {
        console.log('Bus details:', bus); 
      },
      (error) => {
        console.error('Error fetching bus details:', error);
      }
    );
  }

  searchBuses(source: string, destination: string): void {
    this.buses$ = this.busdetailservice.getBusBySourceAndDestination(source, destination);
  }
}