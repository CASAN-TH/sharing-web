import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoDonateService {

  constructor(
    private http: HttpClient
  ) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token@sharing-web-dev');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  saveDonate(body) {
    return this.http.post(environment.apiUrl + '/api/donates', body, { headers: this.authorizationHeader() }).toPromise();
  }
}
