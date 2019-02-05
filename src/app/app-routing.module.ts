import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { AuthGuardService } from "ng6-md-auth";
import { InfoDonateComponent } from "./pages/info-donate/info-donate.component"
import { DonateDetailComponent } from "./pages/donate-detail/donate-detail.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { EditprofileComponent } from './pages/editprofile/editprofile.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "info-donate", component: InfoDonateComponent },
  { path: "donate-detail", component: DonateDetailComponent },
  { path: "profile", component: ProfileComponent },
  { path: "editprofile", component: EditprofileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
