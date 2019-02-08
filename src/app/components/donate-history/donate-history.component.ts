import { Component, OnInit } from '@angular/core';
import { DonateHistoryService } from 'src/app/services/donate-history/donate-history.service';
import { MeService } from 'src/app/services/me/me.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DonateDetailComponent } from 'src/app/pages/donate-detail/donate-detail.component';

@Component({
  selector: 'app-donate-history',
  templateUrl: './donate-history.component.html',
  styleUrls: ['./donate-history.component.scss']
})
export class DonateHistoryComponent implements OnInit {

  constructor(
    private historyService: DonateHistoryService,
    private meService: MeService,
    private spinner: NgxSpinnerService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  user: any;
  donateByUser: any;
  donateByDonator: any;
  donateByReceiver: any;

  ngOnInit() {
    this.spinner.show();
    this.getUser();
  }

  async getUser() {
    const res: any = await this.meService.getProfile();
    this.user = res.data
    console.log(this.user);
    this.getHistoryByUser();
  }

  async getHistoryByUser() {
    const body = {
      donator: this.user._id,
      receiver: this.user._id
    }
    const res: any = await this.historyService.getHistoryByUser(body);
    this.donateByUser = res.data
    console.log(this.donateByUser);
    this.getHistoryByDonator();
  }

  async getHistoryByDonator() {
    const body = {
      donator: this.user._id,
    }
    const res: any = await this.historyService.getHistoryByDonator(body);
    this.donateByDonator = res.data
    console.log(this.donateByDonator);
    this.getHistoryByReceiver();
  }

  async getHistoryByReceiver() {
    const body = {
      receiver: this.user._id
    }
    const res: any = await this.historyService.getHistoryByReceiver(body);
    this.donateByReceiver = res.data
    console.log(this.donateByReceiver);
    this.spinner.hide();
  }

  onDonateDetail(item) {
    const dialogRef = this.dialog.open(DonateDetailComponent, {
      width: '900px',
      height: '600px',
      data: { _id: item._id, user_id: this.user._id }
    });
    dialogRef.afterClosed().subscribe(result => {
      const res = result;
    });
  }













































}
