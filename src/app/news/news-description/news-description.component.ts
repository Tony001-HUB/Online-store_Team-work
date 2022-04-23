import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-news-description',
  templateUrl: './news-description.component.html',
  styleUrls: ['./news-description.component.scss']
})
export class NewsDescriptionComponent implements OnInit {

  public newsInfo;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.newsInfo = data;
  }

  ngOnInit(): void {}

}
