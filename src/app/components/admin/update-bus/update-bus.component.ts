import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusDetails } from '../../../bus-details';
import { BusDetailsService } from '../../../bus-details.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrl: './update-bus.component.css'
})
export class UpdateBusComponent implements OnInit {


  bus: BusDetails = new BusDetails();
  busNumber: any;

  constructor(private busdetailservice:BusDetailsService,private router : Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.busNumber = this.route.snapshot.params[ 'busNumber' ];
    this.busdetailservice.getBusByNumber(this.busNumber).subscribe(data =>{
      this.bus = data;
    },error => console.log(error));
  }

    onSubmit(){
      this.busdetailservice.updateBusDetails( this.bus).subscribe( data =>{
        this.goToBusDetailsList();
      },error => console.log(error));
    }
  

    
  goToBusDetailsList(){
      this.router.navigate(['/api/BusDetails']);
    }

}


