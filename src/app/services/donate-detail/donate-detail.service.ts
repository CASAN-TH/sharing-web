import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonateDetailService {

  constructor(
    public http: HttpClient
  ) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token@sharing-web-dev');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  getDetail(id) {
    return this.http.post(environment.apiUrl + '/api/donate-detail', id, { headers: this.authorizationHeader() }).toPromise();
  }

  getDonateDetail(){
    return this.http.get('../../assets/json/donate-detail.json').toPromise();
  }
}