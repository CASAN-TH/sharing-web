import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { AuthService } from "ng6-md-auth";
import { PointService } from 'src/app/services/point/point.service';

@Component({
  selector: "app-header-toolbar",
  templateUrl: "./header-toolbar.component.html",
  styleUrls: ["./header-toolbar.component.scss"]
})
export class HeaderToolbarComponent implements OnInit {
  appName = `${environment.appName}`;
  userAuth: any;
  point: any;
  remainpoint: any;
  constructor(
    private userAuthSrv: AuthService,
    private router: Router,
    private pointservice: PointService,
  ) {
    this.userAuthSrv.isLoggedIn.subscribe(value => {
      this.userAuth = this.userAuthSrv.user;
      if (this.userAuth) {
        this.getPoint();
      }
    });
    this.pointservice.updatePoint.subscribe(() => {
      this.getPoint();
    });
    this.userAuth = this.userAuthSrv.user;
  }
  onLogout() {
    this.userAuthSrv.logout();
    this.remainpoint = 0;
    this.router.navigate(["/introduce"]);
  }

  onClickToHome() {
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
    this.getPoint();
  }

  async getPoint() {
    try {
      if (this.userAuth) {
        let body = {
          user_id: this.userAuth._id
        }
        this.point = await this.pointservice.getPoint(body);
        // console.log(this.point)
        if (!this.point.data[0].total) {
          this.remainpoint = 0;
        } else {
          this.remainpoint = this.point.data[0].total - this.point.data[0].used;
          // console.log(this.remainpoint)
        }
      }
    } catch (error) {
      throw error
    }
  }

  openProfile() {
    this.router.navigate(["profile"]);
  }

  openRegister() {
    this.router.navigate(["register"]);
  }

  openLogin() {
    this.router.navigate(["login"]);
  }
}
