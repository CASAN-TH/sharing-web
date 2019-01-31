import { Component, OnInit, Inject } from '@angular/core';
import { DonateDetailService } from 'src/app/services/donate-detail/donate-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';


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
  ) { }

  ngOnInit() {
    // this.spinner.show();
    // this.activatedRoute
    //   .queryParams
    //   .subscribe(params => {
    //     if (params['id'] && params['user_id']) {
    //       this.itemId = params['id'];
    //       this.userId = params['user_id']
    //     }
    //   });
    this.getData();
    console.log(this.modalData);
  }

  async getData() {
    try {
      let idProd = {
        id: this.modalData._id
      }
      this.data = await this.donateDetailService.getDetail(idProd);
      this.imageArray = this.data.data.image;
      console.log(this.data);
      this.spinner.hide();
    } catch (error) {
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
      this.spinner.hide();
    } catch (error) {
      this.dialogRef.close();
      this.spinner.hide();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
