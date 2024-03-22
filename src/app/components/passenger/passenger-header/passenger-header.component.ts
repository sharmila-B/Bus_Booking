import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-header',
  templateUrl: './passenger-header.component.html',
  styleUrl: './passenger-header.component.css'
})
export class PassengerHeaderComponent {
  url:string='/';
  constructor(private route:Router){
    
  }
  gotourl(url: string): void {
   this.route.navigate(["/"+url]);
 }
}
