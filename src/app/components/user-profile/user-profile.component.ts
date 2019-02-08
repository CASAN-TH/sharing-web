import { MeService } from 'src/app/services/me/me.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  data: any;

  constructor(
    private router: Router,
    private meService: MeService
  ) { }

  async ngOnInit() {
    let res: any = await this.meService.getProfile();
    // console.log(res);
    this.data = res.data;
  }

  onClickToEdit() {
    this.router.navigate(['/edit-profile']);
  }
}
