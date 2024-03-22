import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  url:string='/';
  constructor(private route:Router){
    
  }
  gotourl(url: string): void {
   this.route.navigate(["/"+url]);
 }
}
