import { Component, OnInit } from '@angular/core';
import { DonateDetailService } from 'src/app/services/donate-detail/donate-detail.service';


@Component({
  selector: 'app-donate-detail',
  templateUrl: './donate-detail.component.html',
  styleUrls: ['./donate-detail.component.scss']
})
export class DonateDetailComponent implements OnInit {

  data: any;
  imageArray: any;

  constructor(
    private donateDetailService: DonateDetailService,
  ) { }

  async ngOnInit() {
    this.data = await this.donateDetailService.getDonateDetail();
    this.imageArray = this.data.data.images
    console.log(this.imageArray)
  }

}
