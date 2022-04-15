import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {CurrencyService} from "../services/currency.service";
import {map, mergeAll, Subscription} from "rxjs";
import {NewsCategoriesService} from "../services/news-categories.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  lat: number;
  lon: number;
  weatherData;
  currentData;
  newsCategories;
  sub: Subscription;
  allNews;

  constructor(
    private weatherService: WeatherService,
    private currencyService: CurrencyService,
    private newsCategoriesService: NewsCategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sub = new Subscription()
    this.route.paramMap.subscribe(params => console.log(params))
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

  getLocation() {
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

  getCurrencyData() {
    this.currencyService.getCurrencyInfo().subscribe(data => this.currentData = data)
  }

  getAllCategoriesNews() {
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
    ).subscribe(data => {this.newsCategories = data; console.log(this.newsCategories)})
  }

  getNews(id: string) {
    this.newsCategoriesService.getAllNews(id).subscribe((data) =>  this.allNews = data )
  }
}
