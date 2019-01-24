import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonateServiceService {

  constructor(public http: HttpClient) { }

  getDonate() {
    return this.http.get('../../../assets/json/donate.json').toPromise();
  }
}
