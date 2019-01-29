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
  itemId: any;
  userId: any;

  constructor(
    private donateDetailService: DonateDetailService,
    private activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit() {

    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['id'] && params['user_id']) {
          this.itemId = params['id'];
          this.userId = params['user_id']
          console.log(this.itemId);
          console.log(this.userId);
        }
      });
    let idProd = {
      id: this.itemId
    }
    this.data = await this.donateDetailService.getDetail(idProd);
    this.imageArray = this.data.data.image
    console.log(this.data)
    console.log(this.imageArray)
  }

  async onAcceptDonate() {
    let body = {
      product_id: this.itemId,
      user_id: this.userId
    }
    const res: any = await this.donateDetailService.updateStatus(body);
    console.log(res);
  }

}
