import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  url:string='/';
  constructor(private route:Router){
    
  }
  gotourl(url: string): void {
   this.route.navigate(["/"+url]);
 }

}
