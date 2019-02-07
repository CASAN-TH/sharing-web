import { Component, OnInit } from '@angular/core';
import { DonateServiceService } from 'src/app/services/donate-servic/donate-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  userAuthData: any

  constructor(
    private donateService: DonateServiceService,
    private router: Router,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  data: any;

  ngOnInit() {
    this.spinner.show()
    window.scrollTo(0, 0);
    this.getDonate()
  }

  async getDonate() {
    try {
      this.data = await this.donateService.getDonate();
      console.log(this.data)
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      throw error
    }
  }

  openLogin() {
    this.router.navigate(['login']);
  }

}
