import { DonateDetailComponent } from './../donate-detail/donate-detail.component';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

import { DonateServiceService } from "src/app/services/donate-servic/donate-service.service";
import { MeService } from 'src/app/services/me/me.service';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private donateService: DonateServiceService,
    private router: Router,
    private meService: MeService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  data: any = [];
  user: any;
  afterClosed: Boolean = false;

  ngOnInit() {
    if (!this.afterClosed) {
      this.spinner.show();
      this.getUser();
    }
  }

  async getUser() {
    try {
      this.user = await this.meService.getProfile();
      console.log(this.user);
      this.getDonate();
    } catch (error) {

    }
  };

  async getDonate() {
    if (this.afterClosed) {
      this.spinner.show();
      try {
        this.data = await this.donateService.getDonate();
        console.log(this.data)
        this.spinner.hide();
      } catch (error) {
        this.spinner.hide();
      }
    } else {
      try {
        this.data = await this.donateService.getDonate();
        console.log(this.data)
        this.spinner.hide();
      } catch (error) {
        this.spinner.hide();
      }
    }

  }

  onCreateDonate() {
    this.router.navigate(['/info-donate']);
  }

  onDonateDetail(item) {
    console.log(item)
    this.router.navigate(['donate-detail'], { queryParams: { id: item._id, user_id: this.user.data._id } });
  }

  onModalDetail(item) {
    const dialogRef = this.dialog.open(DonateDetailComponent, {
      width: '900px',
      height: '600px',
      data: { _id: item._id, user_id: this.user.data._id }
    });
    dialogRef.afterClosed().subscribe(result => {
      const res = result;
      if (res === 'confirm') {
        this.afterClosed = true;
        this.getDonate();
      }
    });
  }
}
