import {Component, OnInit} from '@angular/core';
import {NewsCategoriesService} from "../../services/news-categories.service";


@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  news;

  constructor(private newsService: NewsCategoriesService) {}

  ngOnInit(): void {
  }

}
