import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonateHistoryService {

  constructor(
    private http: HttpClient
  ) { }

  getHistoryByUser(body) {
    return this.http.post(environment.apiUrl + '/api/donates-history-all', body).toPromise();
  }

  getHistoryByDonator(body) {
    return this.http.post(environment.apiUrl + '/api/donates-history-donator', body).toPromise();
  }

  getHistoryByReceiver(body) {
    return this.http.post(environment.apiUrl + '/api/donates-history-receiver', body).toPromise();
  }







































}
