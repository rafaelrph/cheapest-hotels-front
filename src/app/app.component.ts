import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  /**
   * List of hotels
   */
  hotelsFound: any[] = null;

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
    this.hotelService.searchCheapestHotels(this._get('checkin'), this._get('checkout'), this._get('location')).subscribe(hotels => {
      this.hotelsFound = hotels;
    });
    
  }

}
