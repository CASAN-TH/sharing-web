import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderToolbarComponent } from "./components/header-toolbar/header-toolbar.component";
import { environment } from "src/environments/environment";
import { AuthModule } from "ng6-md-auth";
import { InfoDonateComponent } from './pages/info-donate/info-donate.component';
import { DonateDetailComponent } from './pages/donate-detail/donate-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";


const apiSrvCfg = environment;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderToolbarComponent,
    InfoDonateComponent,
    DonateDetailComponent,
    ModalConfirmComponent,
    ProfileComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    HttpClientModule,
    NgxSpinnerModule,
    MatIconModule,
    MatInputModule,
    SlideshowModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    NgMatSearchBarModule,
    MatSnackBarModule,
    MatDialogModule,
    AuthModule.forRoot(apiSrvCfg)
  ],
  entryComponents: [
    ModalConfirmComponent,
    DonateDetailComponent,
    UserProfileComponent
  ],
  exports: [
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
