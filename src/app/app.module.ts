import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from '../services/api.service';
import { HotelService } from '../services/hotel.service';
import { HttpModule } from '@angular/http';
import { HotelCardComponent } from '../components/hotelcard.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    HotelService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
