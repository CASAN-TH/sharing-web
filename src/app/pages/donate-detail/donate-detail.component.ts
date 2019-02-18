import { MeService } from './../../services/me/me.service';
import { Component, OnInit, Inject } from '@angular/core';
import { DonateDetailService } from 'src/app/services/donate-detail/donate-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { PointService } from 'src/app/services/point/point.service';


@Component({
  selector: 'app-donate-detail',
  templateUrl: './donate-detail.component.html',
  styleUrls: ['./donate-detail.component.scss']
})
export class DonateDetailComponent implements OnInit {

  data: any;
  imageArray: any;
  itemId: any;
  user: any;
  point: any;
  remainPoint: any;

  constructor(
    private donateDetailService: DonateDetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private dialogRef: MatDialogRef<DonateDetailComponent>,
    public dialog: MatDialog,
    private meService: MeService,
    private pointService: PointService,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ) {

  }

  ngOnInit() {
    // console.log(this.modalData);
    setTimeout(() => {
      this.spinner.show();
    }, 5);
    this.getData();
  }

  async getData() {
    let idProd = {
      id: this.modalData._id
    }
    try {
      this.data = await this.donateDetailService.getDetail(idProd);
      this.imageArray = this.data.data.image;
      // console.log(this.data);
      this.getPoint();
    } catch (error) {
      this.spinner.hide();
      throw error

    }
  }

  async getPoint() {
    try {
      this.user = await this.meService.getProfile();
      // console.log(this.user);
      const body = {
        user_id: this.user.data._id
      }
      this.point = await this.pointService.getPoint(body);
      // console.log(this.point);
      this.remainPoint = await this.point.data[0].total - this.point.data[0].used;
      console.log(this.remainPoint);
      // console.log(this.point);
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      throw error
    }

  }

  async onAcceptDonate() {
    let body = {
      product_id: this.modalData._id,
      user_id: this.modalData.user_id
    };
    const body2 = {
      user_id: this.data.data.donator,
      bonus: 0
    }
    const body3 = {
      user_id: this.user.data._id,
      bonus: 0
    };

    this.spinner.show();
    try {
      const res: any = await this.donateDetailService.updateStatus(body);
      const resTotal: any = await this.pointService.addTotal(body2);
      const resUserd: any = await this.pointService.addUsed(body3);
      if(res){
        this.pointService.updatePoint.emit();
      }
      this.dialogRef.close('confirm');
    } catch (error) {
      this.spinner.hide();
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.dialogRef.close('confirm');
  }

}
