import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  @Output() updatePoint: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token@sharing-web-dev');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  addPoint(body) {
    return this.http.post(environment.apiUrl + '/api/points', body, { headers: this.authorizationHeader() }).toPromise();
  }

  getPoint(body) {
    return this.http.post(environment.apiUrl + '/api/points-user', body, { headers: this.authorizationHeader() }).toPromise();
  }

  addTotal(body) {
    return this.http.post(environment.apiUrl + '/api/points-add-total', body, { headers: this.authorizationHeader() }).toPromise();
  }

  addUsed(body) {
    return this.http.post(environment.apiUrl + '/api/points-add-used', body, { headers: this.authorizationHeader() }).toPromise();
  }

}
