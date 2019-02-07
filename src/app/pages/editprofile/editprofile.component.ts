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
    
    
  ];

  constructor(
    private router: Router,
    
  ) { }



  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onCancelEdit() {
    this.router.navigate(['/profile']);
  }



}
