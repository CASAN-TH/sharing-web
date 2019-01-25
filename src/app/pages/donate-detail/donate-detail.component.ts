import { Component, OnInit } from '@angular/core';
import { DonateDetailService } from 'src/app/services/donate-detail/donate-detail.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-donate-detail',
  templateUrl: './donate-detail.component.html',
  styleUrls: ['./donate-detail.component.scss']
})
export class DonateDetailComponent implements OnInit {

  data: any;
  imageArray: any;
  itemId:any;

  constructor(
    private donateDetailService: DonateDetailService,
    private activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit() {

    this.activatedRoute
      .queryParams
      .subscribe(params =>{
        if (params['id']){
          this.itemId = params['id'];
          console.log(this.itemId);
        }
        });
    
    this.data = await this.donateDetailService.getDonateDetail();
    this.imageArray = this.data.data.images
    console.log(this.data)
    console.log(this.imageArray)
  }

}
