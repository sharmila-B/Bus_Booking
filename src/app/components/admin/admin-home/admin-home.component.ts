import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  constructor(private route: Router) {}

  gotoAddBus():void{
    this.route.navigate(['/admin/add-bus']);
  }

}
