import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

import { DonateServiceService } from "src/app/services/donate-servic/donate-service.service";
import { MeService } from 'src/app/services/me/me.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private donateService: DonateServiceService,
    private router: Router,
    private meService: MeService
  ) { }

  data: any = [];
  user: any;

  ngOnInit() {
    this.getDonate();
    this.getUser();
  }

  async getUser() {
    this.user = await this.meService.getProfile();
    console.log(this.user);
  };

  async getDonate() {
    this.data = await this.donateService.getDonate()
    console.log(this.data)
  }

  onCreateDonate() {
    this.router.navigate(['/info-donate']);
  }

  onDonateDetail(item) {
    console.log(item)
    this.router.navigate(['donate-detail'], { queryParams: { id: item._id, user_id: this.user.data._id } });
  }
}
