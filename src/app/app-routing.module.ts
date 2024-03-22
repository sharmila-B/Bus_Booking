import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { PassengerLoginComponent } from './components/passenger/passenger-login/passenger-login.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AdminSignupComponent } from './components/admin/admin-signup/admin-signup.component';
import { AddBusComponent } from './components/admin/add-bus/add-bus.component';
import { BusListComponent } from './components/admin/bus-list/bus-list.component';
import { DeleteBusComponent } from './components/admin/delete-bus/delete-bus.component';
import { LogoutComponent } from './components/admin/logout/logout.component';
import { PassengerListComponent } from './components/admin/passenger-list/passenger-list.component';
import { UpdateBusComponent } from './components/admin/update-bus/update-bus.component';
import { ViewTicketsComponent } from './components/admin/view-tickets/view-tickets.component';
import { BookBusComponent } from './components/passenger/book-bus/book-bus.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { PassengerHeaderComponent } from './components/passenger/passenger-header/passenger-header.component';
import { PassengerHomeComponent } from './components/passenger/passenger-home/passenger-home.component';
import { PassengerSignupComponent } from './components/passenger/passenger-signup/passenger-signup.component';
import { PassengerViewTicketsComponent } from './components/passenger/passenger-view-tickets/passenger-view-tickets.component';
import { BusDetailsComponent } from './components/bus-details/bus-details.component';
import { PassengerLogoutComponent } from './components/passenger/passenger-logout/passenger-logout.component';




const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'passenger-login', component: PassengerLoginComponent },
  { path: 'bus-details', component: BusDetailsComponent },

  {
    path: 'admin', children: [

      { path: 'admin-header', component: AdminHeaderComponent },
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'admin-signup', component: AdminSignupComponent },
      { path: 'add-bus', component: AddBusComponent },
      { path: 'bus-list', component: BusListComponent },
      { path: 'delete-bus', component: DeleteBusComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'passenger-list', component: PassengerListComponent },
      { path: 'update-bus', component: UpdateBusComponent },
      { path: 'view-tickets', component: ViewTicketsComponent }

    ]
  },

  {
    path: 'passenger', children: [

      { path: 'passenger-header', component: PassengerHeaderComponent },
      { path: 'passenger-signup', component: PassengerSignupComponent },
      { path: 'passenger-home', component: PassengerHomeComponent },
      { path: 'book-bus', component: BookBusComponent },
      { path: 'passenger-view-tickets', component: PassengerViewTicketsComponent },
      {path: 'passenger-logout', component: PassengerLogoutComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
