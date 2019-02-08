import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  images: any = [
    {
        "url": "https://cdn.pixabay.com/photo/2017/01/26/23/48/love-2011994_1280.png"
    },
    {
        "url": "https://image.shutterstock.com/z/stock-photo-group-portrait-of-two-white-caucasian-cute-adorable-funny-children-toddlers-sitting-together-617915693.jpg"
    },
    {
        "url": "https://cdn.pixabay.com/photo/2015/09/10/16/19/alive-934671_1280.jpg"
    }
]

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
