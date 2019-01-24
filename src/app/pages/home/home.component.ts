import { Component, OnInit } from "@angular/core";

import { DonateServiceService } from "src/app/services/donate-servic/donate-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private donateService: DonateServiceService) { }

  data: any = [];

  ngOnInit() {
    this.getDonate()
  }

  async getDonate() {
    this.data = await this.donateService.getDonate()
    console.log(this.data)
  }
}
