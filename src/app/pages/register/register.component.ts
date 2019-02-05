import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "ng6-md-auth";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";

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
    ref1: ""
  }

  constructor(
    private userAuth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.userAuth.isLoggingIn.subscribe(() => {

    });
    this.userAuth.isLoggedIn.subscribe(value => {
      this.spinner.hide();
      if (this.userAuth.user) {
        this.router.navigate(["/home"]);
      }
    });

    this.userAuth.isLoggedFail.subscribe(error => {
      this.spinner.hide();
      console.log(error);
    });
    if (this.userAuth.user) {
      this.router.navigate(["/home"]);
    }
  }
  ngOnInit() {
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

  async saveRegister() {
    this.spinner.show();
    try {
      const res: any = await this.userAuth.register(this.register)
      console.log(res)
      if (res && res.status === 200) {
        this.snackBar.open('สมัครสมาชิกสำเร็จ', '', {
          duration: 3000,
        });
        this.userAuth.onSuccess(res.token)
        // this.router.navigate(["/home"]);
        this.spinner.hide()
      }
    } catch (error) {
      this.snackBar.open('ข้อมูลผิดพลาด', 'โปรดกรอกข้อมูลใหม่', {
        duration: 3000,
      });
      console.log(error);
      this.spinner.hide()
    }
  }

  openLogin() {
    this.router.navigate(["/login"]);
  }

}
