import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  /**
   * Error message
   */
  errorMsg: string = null;

  /**
   * Controls errors
   */
  error: boolean = false;

  /**
   * List of hotels
   */
  hotelsFound: Hotel[] = null;

  /**
   * Form instance
   */
  searchForm: FormGroup;
  
  /**
   * Constructor method
   * @param frmbuilder 
   * @param router 
   */
  constructor(private frmbuilder: FormBuilder, private router: Router, private hotelService: HotelService) {
    
  }

  /** 
   * Init method
   */
  ngOnInit() {
    this.searchForm = this.frmbuilder.group({
      checkin: '',
      checkout: '',
      location: ''
    });
  }
  
  /**
   * Get data from a form
   * @param target - element
   */
  _get(target: string) {
    return this.searchForm.controls[target] ? this.searchForm.controls[target].value : null;
  }

  /** 
   * Read the form and request the API
   */
  searchHotels() {
    if(this._get('checkin') !== "" && this._get('checkout') !== "" && this._get('location') !== "") {
      this.hotelService.searchCheapestHotels(this._get('checkin'), this._get('checkout'), this._get('location'))
        .subscribe(hotels => {
          this.hotelsFound = hotels;
          this.error = false;
        },
        error => {
            if (error.status == 404) {
                this.errorMsg = "Not found.";
            } else {
                this.errorMsg = "Error on the API.";
            }
            this.error = true;
        });
    } else {
        this.errorMsg = "All fields are required.";
        this.error = true;
    }
  }

}
