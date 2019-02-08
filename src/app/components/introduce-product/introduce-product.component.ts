import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DonateServiceService } from 'src/app/services/donate-servic/donate-service.service';

@Component({
  selector: 'app-introduce-product',
  templateUrl: './introduce-product.component.html',
  styleUrls: ['./introduce-product.component.scss']
})
export class IntroduceProductComponent implements OnInit {

  data: any;


  constructor(
    private donateService: DonateServiceService,
    private spinner: NgxSpinnerService,
    
  ) { }

  ngOnInit() {
    this.spinner.show()
    window.scrollTo(0, 0);
    this.getDonate()
  }

  async getDonate() {
    try {
      this.data = await this.donateService.getDonate();
      // console.log(this.data)
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      throw error
    }
  }

}
