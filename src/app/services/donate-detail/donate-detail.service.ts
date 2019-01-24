import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonateDetailService {

  constructor(
    public http: HttpClient
  ) { }

  getDonateDetail(){
    return this.http.get('../../assets/json/donate-detail.json').toPromise();
  }
}