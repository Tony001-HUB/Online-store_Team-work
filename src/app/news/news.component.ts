import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {CurrencyService} from "../services/currency.service";

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
  constructor(private weatherService: WeatherService, private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.getLocation()
    this.getCurrencyData();
    this.weatherService.getWeatherData(35, 40).subscribe(console.log)
  }

  getLocation() {
    if('geolocation' in navigator) {
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




}
