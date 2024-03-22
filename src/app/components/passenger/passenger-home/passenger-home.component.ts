import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-home',
  templateUrl: './passenger-home.component.html',
  styleUrl: './passenger-home.component.css'
})
export class PassengerHomeComponent {

  constructor (private route: Router){}

  bookbus(): void{
    this.route.navigate(['/bus-details']);
  }

}
