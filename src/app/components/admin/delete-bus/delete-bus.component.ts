import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDetails } from '../../../bus-details';
import { BusDetailsService } from '../../../bus-details.service';

@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrl: './delete-bus.component.css'
})
export class DeleteBusComponent implements OnInit {
  buses$: Observable<BusDetails[]> | undefined; 

  constructor(private busdatailService: BusDetailsService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.buses$ = this.busdatailService.findAll();
  }

  deleteBus(busNumber: any): void {
    this.busdatailService.deleteBusByNumber(busNumber).subscribe(
      () => {
        console.log('Bus deleted successfully');
        this.load();
      },
      (error) => {
        console.error('Error deleting bus:', error);
      }
    );
  }
}
