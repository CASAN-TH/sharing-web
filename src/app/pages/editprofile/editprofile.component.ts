import { MeService } from 'src/app/services/me/me.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

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
    }
  ];

  data: any;

  constructor(
    private router: Router,
    private meService: MeService,
    private spinner: NgxSpinnerService

  ) { }


  ngOnInit() {
    this.spinner.show();
    window.scrollTo(0, 0);
    this.getProfile();
  }

  async getProfile() {
    let res: any = await this.meService.getProfile();
    // console.log(res);
    this.data = res.data;
    this.spinner.hide();
  }

  getSize(i) {
    // console.log(i);
    this.data.size = i
  }

  async onSaveEdit() {
    let body = {
      firstname: this.data.firstname,
      lastname: this.data.lastname,
      email: this.data.email,
      ref1: this.data.ref1
    }
    // console.log(body);
    try {
      const res: any = await this.meService.editProfile(body);
      // console.log(res);
      this.router.navigate(['/home']);
    } catch (error) {
      // console.log(error);
    }
  }

  onCancelEdit() {
    this.router.navigate(['/profile']);
  }



}
