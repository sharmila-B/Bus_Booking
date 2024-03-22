import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private accountService: AccountService, private router: Router) {}

chooseRole(role: string): void {
  console.log(role);
  this.accountService.setRole(role);
  this.router.navigate([role]);
}

}

@Injectable({
providedIn: 'root'
})
export class AccountService {

private roleSubject = new BehaviorSubject<string>('');

setRole(role: string): void {
  this.roleSubject.next(role);
}

getRole(): BehaviorSubject<string> {
  return this.roleSubject;
}

constructor() { }
}




