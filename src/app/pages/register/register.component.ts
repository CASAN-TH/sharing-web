import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "ng6-md-auth";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";
import { MeService } from "src/app/services/me/me.service";
import { PointService } from "src/app/services/point/point.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  register = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    ref1: "",
    // refnum1: 0,
    // refnum2: 0
  }

  constructor(
    private userAuth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private meService: MeService,
    private pointService: PointService,
  ) {
    this.userAuth.isLoggingIn.subscribe(() => {

    });
    this.userAuth.isLoggedIn.subscribe(value => {
      this.createPoint();
    });

    this.userAuth.isLoggedFail.subscribe(error => {
      this.spinner.hide();
      // console.log(error);
    });
    if (this.userAuth.user) {
      this.router.navigate(["/home"]);
    }
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.firstFormGroup = this.formBuilder.group({
      Username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  async createPoint() {
    const resp: any = await this.meService.getProfile();
    // console.log(resp);
    const body = {
      user_id: resp.data._id
    }
    const respo: any = await this.pointService.addPoint(body);
    if (this.userAuth.user) {
      this.router.navigate(["/home"]);
      this.spinner.hide();
    }
    // console.log(respo);
  }

  async saveRegister() {
    this.spinner.show();
    try {
      const res: any = await this.userAuth.register(this.register)
      // console.log(res)
      if (res && res.status === 200) {
        this.snackBar.open('สมัครสมาชิกสำเร็จ', '', {
          duration: 3000,
        });
        this.userAuth.onSuccess(res.token);
        this.spinner.hide()
      }
    } catch (error) {
      if (error) {
        this.spinner.hide()
        if (error['error']['message'] === '11000 duplicate key error collection: auth.users index: username already exists') {
          this.snackBar.open('มีชื่อผู้ใช้นี้แล้ว', 'โปรดกรอกข้อมูลใหม่', {
            duration: 3000,
          });
        } else if (error['error']['message'] === '11000 duplicate key error collection: auth.users index: email already exists') {
          this.snackBar.open('อีเมลนี้ถูกใช้แล้ว', 'โปรดกรอกข้อมูลใหม่', {
            duration: 3000,
          });
        }
      }
    }
  }

  openLogin() {
    this.router.navigate(["/login"]);
  }

}
