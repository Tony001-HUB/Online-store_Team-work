import { Component, OnInit } from '@angular/core';
import {NewsCategoriesService} from "../../services/news-categories.service";

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  allNews;

  constructor(private newsCategoriesService: NewsCategoriesService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newsCategoriesService.getAllNews().subscribe(data => this.allNews = data)
  }

}
