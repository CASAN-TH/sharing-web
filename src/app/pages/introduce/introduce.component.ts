import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  images: any = [
    {
        "url": "http://www.toysmile.com/media/catalog/product/cache/1/image/5dbab2e28bc9b44f677294c6401487eb/d/-/d-va-hoodie-07.jpg"
    },
    {
        "url": "http://fixtoys.net/upload/OVW%200041%20001.jpg"
    },
    {
        "url": "http://www.toysmile.com/media/catalog/product/cache/1/image/5dbab2e28bc9b44f677294c6401487eb/d/-/d-va-dress-cosplay-03.jpg"
    }
]

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
