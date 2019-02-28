import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  images: any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getImageData();
  }

  async getImageData(){
    this.images = await this.http.get('../../../assets/json/introduce.json').toPromise();
    console.log(this.images);
  }

}
