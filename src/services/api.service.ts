import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
  results = {};

  constructor(private http: Http) { }

  /**
   * Send a GET request to an external API
   * 
   * @param rota API endpoint
   */
  getExternal(rota: string): Observable<any[]> {
    const url = environment.urlApi + rota;
    return this.http.get(url).map(res => res.json());
  }

}
