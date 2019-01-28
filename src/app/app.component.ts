import { Component } from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    this.configFirebase();
  }

  configFirebase() {
    const config = {
      apiKey: "AIzaSyCLAjLr__f7sStubHHjvdyckaQ5a3AYsbk",
      authDomain: "sharing-donate.firebaseapp.com",
      databaseURL: "https://sharing-donate.firebaseio.com",
      projectId: "sharing-donate",
      storageBucket: "sharing-donate.appspot.com",
      messagingSenderId: "1051299439725"
    };
    firebase.initializeApp(config);

  }


















}
