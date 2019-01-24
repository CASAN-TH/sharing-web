import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoDonateService {

  constructor(
    private http: HttpClient
  ) { }

  saveDonate(body) {
    return this.http.post('http://localhost:3000/api/donates', body).toPromise();
  }
}
