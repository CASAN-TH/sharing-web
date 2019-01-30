import { Component, OnInit } from '@angular/core';
import { DonateDetailService } from 'src/app/services/donate-detail/donate-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


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
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['id'] && params['user_id']) {
          this.itemId = params['id'];
          this.userId = params['user_id']
        }
      });
    this.getData();

  }

  async getData() {
    try {
      let idProd = {
        id: this.itemId
      }
      this.data = await this.donateDetailService.getDetail(idProd);
      this.imageArray = this.data.data.image;
      console.log(this.data);
      this.spinner.hide();
    } catch (error) {
      throw error
    }
  }

  async onAcceptDonate() {
    let body = {
      product_id: this.itemId,
      user_id: this.userId
    }
    this.spinner.show();
    const res: any = await this.donateDetailService.updateStatus(body);
    console.log(res);
    this.router.navigate(['home']);
    this.spinner.hide();
  }

}
