import { Component, OnInit } from '@angular/core';
import { ICatalog } from '../models/catalog';
import { ContentService } from '../services/content.service';
import { GoodsService } from '../services/goods.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogMenu: ICatalog[] = [];
  type: string;

  constructor(
    private contentService: ContentService,
    private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.catalogMenu = this.contentService.catalogMenu;
  }

  public toCatalogSection(type: string) {
    this.goodsService.bSubject.next(type);
  }

}
