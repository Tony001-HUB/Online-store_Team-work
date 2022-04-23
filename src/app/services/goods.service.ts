import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGoods } from '../models/goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  public bSubject = new BehaviorSubject('gyroscooters');

  public stateObject = {
    currentView: 'gyroscooters'
  }

  constructor(private http: HttpClient) { }

  public getGoods(type: string): Observable<IGoods[]> {
    return this.http.get<IGoods[]>(`${environment.goodsUrl}/${type}.json`)
  }

  public searchGoods(): Observable<any> {
    return this.http.get<any>(`${environment.goodsUrl}/${this.stateObject.currentView}.json`)
  } 
}
