import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../../../bus-details';
import { BusDetailsService } from '../../../bus-details.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: BusDetails[] = [];
  bus: any = {};
  showTable: boolean = false; // Track visibility of bus list table
  showBusDetails: boolean = false; // Track visibility of bus details

  constructor(private busDetailsService: BusDetailsService) { }

  ngOnInit(): void {
    this.findAllBuses();
  }

  findAllBuses(): void {
    this.busDetailsService.findAll().subscribe(
      (buses: BusDetails[]) => {
        this.buses = buses;
      },
      (error) => {
        console.error('Error fetching buses:', error);
      }
    );
  }

  toggleTable() {
    this.showTable = !this.showTable;
  }

  getBusByNumber(busNumber: number): void {
    this.busDetailsService.getBusByNumber(busNumber).subscribe(
      (bus: BusDetails) => {
        console.log('Bus details:', bus);
        this.bus = bus; // Assign found bus details
        this.showBusDetails = true; // Show bus details
      },
      (error) => {
        console.error('Error fetching bus details:', error);
      }
    );
  }
}
