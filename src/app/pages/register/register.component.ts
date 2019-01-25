import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "ng6-md-auth";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {
    this.userAuth.isLoggingIn.subscribe(() => {
      this.spinner.show();
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
    try {
      const res: any = await this.userAuth.register(this.register)
      console.log(res)
      if (res.token) {
        this.router.navigate(["/login"]);
        this.spinner.hide()
      }
    } catch (error) {
      console.log(error);
      console.log('login Fail');
      this.spinner.hide()
    }
  }

  openLogin() {
    this.router.navigate(["/login"]);
  }

}
