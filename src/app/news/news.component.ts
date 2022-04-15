import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {CurrencyService} from "../services/currency.service";
import {map, Subscription} from "rxjs";
import {NewsCategoriesService} from "../services/news-categories.service";
import {ActivatedRoute, Router} from "@angular/router";
import {INewsCategories} from "../models/inews-categories";
import {IWeatherData} from "../models/iweather-data";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public lat: number;
  public lon: number;
  public weatherData;
  public currentData;
  public newsCategories : INewsCategories [];
  public sub: Subscription;
  public allNews;

  constructor(
    private weatherService: WeatherService,
    private currencyService: CurrencyService,
    private newsCategoriesService: NewsCategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sub = new Subscription();
    this.route.paramMap.subscribe();
    this.newsCategories = [];
  }

  ngOnInit(): void {
    this.getLocation();
    this.getCurrencyData();
    this.weatherService.getWeatherData(35, 40).subscribe();
    this.getAllCategoriesNews();
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

  public getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(data => {
        this.lat = data.coords.latitude;
        this.lon = data.coords.longitude;
        this.weatherService.getWeatherData(this.lat, this.lon).subscribe(data => {
          this.weatherData = data;
        });
      })
    }
  }

  public getCurrencyData() {
    this.currencyService.getCurrencyInfo().subscribe(data => this.currentData = data)
  }

  public getAllCategoriesNews() {
    this.newsCategoriesService.getAllCategoriesNews().pipe(
      map(data => this.newsCategoriesService.categories.map(item => {
        if (data.categoryId === item.categoryId) {}
        return {
          categoryId: item.categoryId,
          title: item.title,
          description: item.description,
          src: item.src,
        }
      }))
    ).subscribe(data => this.newsCategories = data)
  }

  public getNews(id: string) {
    this.newsCategoriesService.getAllNews(id).subscribe((data) =>  this.allNews = data )
  }
}
