import { DonateDetailComponent } from './../donate-detail/donate-detail.component';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

import { DonateServiceService } from "src/app/services/donate-servic/donate-service.service";
import { MeService } from 'src/app/services/me/me.service';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { throwError } from 'rxjs';


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

  // data: any = [];
  user: any;
  bySize: any;
  userSize: any;
  afterClosed: Boolean = false;

  search: any = {
    keyword: ''
  }

  ngOnInit() {
    if (!this.afterClosed) {
      this.spinner.show();
      this.getUser();
    }
  }

  ngDoCheck() {
    if (this.afterClosed) {
      this.afterClosed = false;
      this.getDonateBySize();
    }
  }

  searchData(keyword){
    console.log(this.search.keyword)
  }

  async getUser() {
    try {
      window.scrollTo(0, 0);
      this.user = await this.meService.getProfile();
      console.log(this.user);
      this.userSize = this.user.data.ref1
      this.getDonateBySize();
    } catch (error) {
      this.spinner.hide();
      throw error
    }
  };

  async getDonateBySize() {
    try {
      let body = {
        size: this.userSize,
        keyword: ''
      }
      this.bySize = await this.donateService.getDonateBySize(body);
      console.log(this.bySize)
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      throw error
    }
  }

  // async getDonate() {
  //   if (this.afterClosed) {
  //     this.spinner.show();
  //     try {
  //       this.data = await this.donateService.getDonate();
  //       console.log(this.data)
  //       this.spinner.hide();
  //     } catch (error) {
  //       this.spinner.hide();
  //     }
  //   } else {
  //     try {
  //       this.data = await this.donateService.getDonate();
  //       console.log(this.data)
  //       this.spinner.hide();
  //     } catch (error) {
  //       this.spinner.hide();
  //     }
  //   }

  // }

  onCreateDonate() {
    this.router.navigate(['/info-donate']);
  }

  // onDonateDetail(item) {
  //   console.log(item)
  //   this.router.navigate(['donate-detail'], { queryParams: { id: item._id, user_id: this.user.data._id } });
  // }

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
      }
    });
  }
}
