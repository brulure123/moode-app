import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  
  src = [
    "../../../assets/img/images_1.png",
    "../../../assets/img/images_2.png",
    "../../../assets/img/images_3.png",
    "../../../assets/img/images_4.png",
    "../../../assets/img/images_5.png"
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  constructor() { }

  ngOnInit() {}

}
