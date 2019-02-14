import { Component, OnInit } from '@angular/core';
import { MeService } from 'src/app/services/me/me.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  data: any;
  total: any;

  constructor(
    private meService: MeService
  ) { }

  async ngOnInit() {
    let res: any = await this.meService.getProfile();
    this.data = res.data;
    this.total = this.data.refnum1-this.data.refnum2;
    // console.log(this.total)
  }

}
