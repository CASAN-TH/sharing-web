import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonateServiceService {

  constructor(public http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token@sharing-web-dev');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  getDonate() {
    return this.http.get(environment.apiUrl +'/api/all-donates').toPromise();
  }

  getDonateBySize(body){
    return this.http.post(environment.apiUrl + '/api/get-donate-by-size', body, { headers: this.authorizationHeader() }).toPromise()
  }
}
