import {Component, OnInit} from '@angular/core';
import {NewsCategoriesService} from "../../services/news-categories.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {INews} from "../../models/inews";
import {Subscription} from "rxjs";
import {NewsDescriptionComponent} from "../news-description/news-description.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  public news: INews[];
  public sub: Subscription;


  constructor(
    private newsService: NewsCategoriesService,
    private route: ActivatedRoute,
    private dialogRef: MatDialog
  )
  {
    this.news = [];
    this.sub = new Subscription();
  }

  ngOnInit(): void {
   this.sub = this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.getAllNews(params.get('id'))
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getAllNews(id) {
    this.newsService.getAllNews(id).subscribe(news => this.news = news)
  }

  public openDialog(news: INews) {
    this.dialogRef.open(NewsDescriptionComponent, {
      data: {
        postId: news.postId,
        title: news.title,
        content: news.content
      }
    })
  }
}
