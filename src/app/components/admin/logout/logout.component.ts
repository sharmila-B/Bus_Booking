import { Component } from '@angular/core';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private adminservice: AdminService) { }

  logout(): void {
    this.adminservice.adminlogout();
  }
}
