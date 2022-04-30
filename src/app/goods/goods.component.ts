import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { IFilteredGoods, IGoods, ISortingData } from '../models/goods';
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

  public getGoods(): any {
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
    this.goods = this.goods.filter(elem => 
      elem.price >= filteredData.beginPrice
      && elem.price <= filteredData.endPrice
      && elem.aquaSecurity === filteredData.aquadef
      && elem.bestseller === filteredData.bestseller
      && elem.novelty === filteredData.novelty
    )
  }
  
  public sortingGoods (sortingData: ISortingData): any {
    if (sortingData.type === 'price' && sortingData.sort === 'up') {
      this.goods = this.goods.sort((a, b) => {return a.price - b.price})
    }
    if (sortingData.type === 'price' && sortingData.sort === 'down') {
      this.goods = this.goods.sort((a, b) => {return b.price - a.price})
    }
    if (sortingData.type === 'rating' && sortingData.sort === 'up') {
      this.goods = this.goods.sort((a, b) => {return a.rating - b.rating})
    }
    if (sortingData.type === 'rating' && sortingData.sort === 'down') {
      this.goods = this.goods.sort((a, b) => {return b.rating - a.rating})
    }
    if (sortingData.type === 'discount' && sortingData.sort === 'up') {
      this.goods = this.goods.sort((a, b) => {return a.discount - b.discount})
    }
    if (sortingData.type === 'discount' && sortingData.sort === 'down') {
      this.goods = this.goods.sort((a, b) => {return b.discount - a.discount})
    }
  }
}  