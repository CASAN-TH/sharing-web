import { Component, OnInit } from '@angular/core';
import { DonateDetailService } from 'src/app/service/donate-detail.service';

@Component({
  selector: 'app-donate-detail',
  templateUrl: './donate-detail.component.html',
  styleUrls: ['./donate-detail.component.scss']
})
export class DonateDetailComponent implements OnInit {

  data: any;

  constructor(
    private donateDetailService: DonateDetailService,
  ) { }

  async ngOnInit() {
    // this.getData();
    // console.log(this.data)
    this.data = await this.donateDetailService.getDonateDetail();
    console.log(this.data)
  }

  async getData(){
    this.data = await this.donateDetailService.getDonateDetail();
    console.log(this.data)
  }

}
