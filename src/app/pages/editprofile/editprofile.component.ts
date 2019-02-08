import { MeService } from 'src/app/services/me/me.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
    private meService: MeService
    
  ) { }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.getProfile();
  }

  async getProfile() {
    let res: any = await this.meService.getProfile();
    console.log(res);
    this.data = res.data;
  }

  getNewSize(i) {
    console.log(i);
    this.data.size = i
  }

  onCancelEdit() {
    this.router.navigate(['/profile']);
  }



}
