
import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoDonateService } from 'src/app/services/info-donate/info-donate.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ModalConfirmComponent } from 'src/app/modals/modal-confirm/modal-confirm.component';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-info-donate',
  templateUrl: './info-donate.component.html',
  styleUrls: ['./info-donate.component.scss']
})
export class InfoDonateComponent implements OnInit {
  @ViewChild('productImg') productImg;
  productImgModel: any;
  images: Array<any> = [];
  data = {
    name: '',
    size: '',
    detail: '',
    image: [
      {
        url: 'https://cf.shopee.co.th/file/36c21f881f8d827a585e612abae06871'
      }
    ]
  }

  size: any = [
    {
      value: 'S'
    },
    {
      value: 'M'
    },
    {
      value: 'L'
    },
    {
      value: 'XL'
    },
  ];

  constructor(
    private InfoDonateService: InfoDonateService,
    private router: Router,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

  }

  getSize(i) {
    // console.log(i);
    this.data.size = i
  }

  async onSaveDonate() {
    console.log('asd');
    let body = {
      name: this.data.name,
      size: this.data.size,
      detail: this.data.detail,
      image: this.images,
      donator: 'pure'
    }
    console.log(body);
    let res = await this.InfoDonateService.saveDonate(body);
    this.router.navigate(['/home']);
    console.log(res);
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

  uploadImg() {
    this.productImg.nativeElement.click();
  }

  onProductImgChange(e) {
    const fileBrowser = this.productImg.nativeElement;
    const reader: any = new FileReader();
    if (fileBrowser.files.length > 0) {
      reader.readAsDataURL(fileBrowser.files.length > 0 ? fileBrowser.files[0] : null);
      reader.onload = () => {
        const base64 = reader.result.replace(/\n/g, '');
        this.uploadTofireBase(base64);
      };
    }
  }

  uploadTofireBase(base64) {
    const storageRef = firebase.storage().ref();
    const fileRandom = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
    const uploadTask: any = storageRef.child(`images/uploads/${fileRandom}.jpg`);

    uploadTask.putString(base64, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
      uploadTask.getDownloadURL().then(url => {
        this.images.push({
          url: url
        });
        console.log(this.images);
      });
    });
  }

  deleteImg(index) {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: '500px',
      data: { message: 'คุณต้องการลบรูปหรือไม่?' }
    });

    dialogRef.afterClosed().subscribe(async result => {
      const res = result;
      if (res === 'confirm') {
        this.spinner.show();
        try {
          this.images.splice(index, 1);
          console.log(this.images);
          this.spinner.hide();
        } catch (error) {
          this.spinner.hide();
        }
      }
    });


    // const conf = window.confirm('ยืนยันการลบรูปสินค้า');
    // if (conf) {
    //   this.images.splice(index, 1);
    // }
  }






































}
