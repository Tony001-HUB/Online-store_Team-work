import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, filter, from, of, Subject, Subscription, take } from 'rxjs';
import { IFilteredGoods, IGoods } from '../models/goods';
import { GoodsService } from '../services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, OnDestroy {
  modelChanged: Subject<string> = new Subject<string>();
  goods: IGoods[] = [];
  sub: Subscription;
  isLoading: Boolean = false;

  constructor(
    private goodsService: GoodsService) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.getGoods()
    this.modelChanged.pipe(
      debounceTime(1500)
    ).subscribe({
      next: (text) => {
        if (text !== '') {
          this.goods = this.goods.filter(elem => elem.name.toLowerCase().includes(text.toLowerCase()))
          this.isLoading = false;
        } else {
          this.getGoods()
        }
      }
    })

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getGoods() {
    this.sub.add(this.goodsService.bSubject.subscribe(data => {
      if (data) {
        this.isLoading = true;
        this.sub.add(this.goodsService.getGoods(this.goodsService.bSubject.getValue())
          .subscribe({
            next: (goods) => {
              this.goods = goods;
              this.isLoading = false;
            }
          }))
      }
    }));
  }

  public searching(event) {
    this.modelChanged.next(event);
    this.isLoading = true;
  }

  public getRating(rating: number): number[] {
    const ratingValue: number[] = [];

    for (let i = 1; i <= rating; i++) {
      ratingValue.push(Math.round(i));
    }
    return ratingValue;
  }

  public filterGoods(filteredData: IFilteredGoods) {
    const res = this.goods.filter(elem => elem.price >= filteredData.beginPrice)
    console.log(res)
  }
}