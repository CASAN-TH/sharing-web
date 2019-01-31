import { Component, OnInit, Inject } from '@angular/core';
import { DonateDetailService } from 'src/app/services/donate-detail/donate-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-donate-detail',
  templateUrl: './donate-detail.component.html',
  styleUrls: ['./donate-detail.component.scss']
})
export class DonateDetailComponent implements OnInit {

  data: any;
  imageArray: any;
  itemId: any;
  userId: any;

  constructor(
    private donateDetailService: DonateDetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private dialogRef: MatDialogRef<DonateDetailComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ) {

  }

  ngOnInit() {
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
      console.log(this.data);
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
    }
    this.spinner.show();
    try {
      const res: any = await this.donateDetailService.updateStatus(body);
      console.log(res);
      // this.router.navigate(['home']);
      this.dialogRef.close();
      this.spinner.hide();
    } catch (error) {
      this.dialogRef.close('confirm');
      this.spinner.hide();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
