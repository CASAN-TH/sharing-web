import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(
    private http: HttpClient
  ) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token@sharing-web-dev');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  getProfile() {
    return this.http.get(environment.apiUrl + '/api/me', { headers: this.authorizationHeader() }).toPromise();
  }

  editProfile(body) {
    return this.http.put(environment.apiUrl + '/api/me', body, { headers: this.authorizationHeader() }).toPromise();
  }








































}
