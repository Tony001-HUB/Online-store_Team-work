import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGoods } from '../models/goods';
import { GoodsService } from '../services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, OnDestroy {
  @Input() type: string;
  sub: Subscription;
  goods: IGoods[] = [];

  constructor(private goodsService: GoodsService) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.getGoods()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getGoods() {
    this.sub.add(this.goodsService.bSubject.subscribe(data => {
      if (data) {
        this.sub.add(this.goodsService.getGoods(this.goodsService.bSubject.getValue())
        .subscribe({
          next: (goods) => {
            this.goods = goods;
          }
        }))
      }
    }));
  }
}
