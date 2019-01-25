
import { Component, OnInit } from '@angular/core';
import { InfoDonateService } from 'src/app/services/info-donate/info-donate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-donate',
  templateUrl: './info-donate.component.html',
  styleUrls: ['./info-donate.component.scss']
})
export class InfoDonateComponent implements OnInit {

  data = {
    name: '',
    size: '',
    detail: '',
    image: [
      {
        url: 'image1.png'
      },
      {
        url: 'image2.png'
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
    private router: Router
  ) { }

  ngOnInit() {

  }

  getSize(i) {
    console.log(i);
    this.data.size = i
  }

  async onSaveDonate() {
    let body = {
      name: this.data.name,
      size: this.data.size,
      detail: this.data.detail,
      image: this.data.image,
      donator: 'pure'
    }
    // console.log(body);
    let res = await this.InfoDonateService.saveDonate(body);
    this.router.navigate(['/home']);
    console.log(res);
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

}
