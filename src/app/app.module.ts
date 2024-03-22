import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BusDetailsComponent } from './components/bus-details/bus-details.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { AddBusComponent } from './components/admin/add-bus/add-bus.component';
import { BusListComponent } from './components/admin/bus-list/bus-list.component';
import { DeleteBusComponent } from './components/admin/delete-bus/delete-bus.component';
import { LogoutComponent } from './components/admin/logout/logout.component';
import { PassengerListComponent } from './components/admin/passenger-list/passenger-list.component';
import { UpdateBusComponent } from './components/admin/update-bus/update-bus.component';
import { ViewTicketsComponent } from './components/admin/view-tickets/view-tickets.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/admin/admin-signup/admin-signup.component';
import { BookBusComponent } from './components/passenger/book-bus/book-bus.component';
import { DeletePassengerComponent } from './components/passenger/delete-passenger/delete-passenger.component';
import { PassengerLoginComponent } from './components/passenger/passenger-login/passenger-login.component';
import { PassengerSignupComponent } from './components/passenger/passenger-signup/passenger-signup.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PassengerBusListComponent } from './components/passenger/passenger-bus-list/passenger-bus-list.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerHeaderComponent } from './components/passenger/passenger-header/passenger-header.component';
import { PassengerHomeComponent } from './components/passenger/passenger-home/passenger-home.component';
import { PassengerViewTicketsComponent } from './components/passenger/passenger-view-tickets/passenger-view-tickets.component';
import { PassengerLogoutComponent } from './components/passenger/passenger-logout/passenger-logout.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    BusDetailsComponent,
    TicketsComponent,
    AddBusComponent,
    BusListComponent,
    DeleteBusComponent,
    LogoutComponent,
    PassengerListComponent,
    UpdateBusComponent,
    ViewTicketsComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    BookBusComponent,
    DeletePassengerComponent,
    PassengerLoginComponent,
    PassengerSignupComponent,
    HeaderComponent,
    AdminHeaderComponent,
    PassengerBusListComponent,
    AdminHomeComponent,
    PassengerHeaderComponent,
    PassengerHomeComponent,
    PassengerViewTicketsComponent,
    PassengerLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
