import {Component, OnInit} from '@angular/core';
import {NewsCategoriesService} from "../../services/news-categories.service";
import {ActivatedRoute, ParamMap} from "@angular/router";


@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  id;
  news;

  constructor(private newsService: NewsCategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.id = params.get('id')
      })
    this.getAllNews(this.id);
  }

  getAllNews(id) {
    this.newsService.getAllNews(this.id).subscribe(data=> this.news = data)
  }
}
