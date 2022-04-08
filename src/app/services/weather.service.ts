import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '5abdc3b11b2cfecaf31fc8665909b7eb';


  constructor(private http: HttpClient) {}

  getWeatherData(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiKey)

    return this.http.get(this.url, { params })
  }

  // getWeatherInfo(): Observable<> {
  //   return this.http.get<IWeatherData>('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5abdc3b11b2cfecaf31fc8665909b7eb')
  // }
}
