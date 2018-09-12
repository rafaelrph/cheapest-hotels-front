import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ApiService } from './api.service';

@Injectable()
export class HotelService {

  constructor(private apiService: ApiService) { }

  searchCheapestHotels(checkin: string, checkout: string, location: string) {
    return this.apiService.getExternal('hotels/cheapest?check_in=' + checkin + "&check_out=" + checkout + "&location=" + location );
  }
}
