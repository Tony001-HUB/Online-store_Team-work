import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { ICatalog } from '../models/catalog';
import { IToolbar } from '../models/toolbar';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() sourceChange = new EventEmitter(); 
  sub: Subscription;
  accountMenu: IToolbar[] = [];
  isActive = false;

  constructor(
    private contentService: ContentService
    ) { }

  ngAfterViewInit(): void {
    this.search()
  }

  ngOnInit(): void {
    this.accountMenu = this.contentService.accountMenu;
   }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

  public search() {
    this.sub = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1500),
        distinctUntilChanged(),
      ).subscribe({
        next: () => {
          console.log(this.searchInput.nativeElement.value);
        }
      });
  }

}
