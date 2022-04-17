import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICurrency} from "../models/icurrency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencyInfo(): Observable<ICurrency>{
    return this.http.get<ICurrency>('https://api.getgeoapi.com/v2/currency/convert?api_key=19cbe8e382f73d4a8e77c4352a79eef6e0c8b0be&&from=USD&to=RUB&amount=1&format=json')
  }
}
