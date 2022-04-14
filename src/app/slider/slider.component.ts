import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { ISlider } from '../models/toolbar';
import { ContentService } from '../services/content.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides: ISlider[] = [];

  slideConfig = { 
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.slides = this.contentService.slides;
  }

}
