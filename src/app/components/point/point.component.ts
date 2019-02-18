import { PointService } from 'src/app/services/point/point.service';
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
    private meService: MeService,
    private pointService: PointService,
  ) { }

  async ngOnInit() {
    let res: any = await this.meService.getProfile();
    this.data = res.data;
    const body = {
      user_id: res.data._id
    }
    const resp: any = await this.pointService.getPoint(body);
    this.data = resp.data[0];
    // console.log(this.data);
    this.total = this.data.total - this.data.used;
    // console.log(this.total)
  }

}
