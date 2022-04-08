import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { Toolbar } from '../models/toolbar.interface';
import { ToolbarService } from '../services/toolbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef;
  isActive = false;
  sub: Subscription;
  accountMenu: Toolbar[] = [];
  catalogMenu = [
    {name: 'Гироскутеры', src: '../../assets/icons/catalog/hydro_scooter.svg'},
    {name: 'Электросамокаты', src: '../../assets/icons/catalog/electric_scooter.svg'},
    {name: 'Моноколеса', src: '../../assets/icons/catalog/unicycle.svg'},
    {name: 'Сигвеи и мини-сигвеи', src: '../../assets/icons/catalog/segway.svg'},
    {name: 'Электроскутеры', src: '../../assets/icons/catalog/electric_scooter_2.svg'},
    {name: 'Электровелосипеды', src: '../../assets/icons/catalog/electric_bike.svg'},
    {name: 'Электроскейты', src: '../../assets/icons/catalog/electric_skateboard.svg'},
    {name: 'Электромобили', src: '../../assets/icons/catalog/electric_car.svg'},
    {name: 'Аксессуары', src: '../../assets/icons/catalog/accessories.svg'},
    {name: 'Умные игрушки', src: '../../assets/icons/catalog/smart_toy.svg'},
    {name: 'Smart Watch', src: '../../assets/icons/catalog/smart_watch.svg'}
  ];

  constructor(private toolbarService: ToolbarService) { }

  ngAfterViewInit(): void {
    this.search()
  }

  ngOnInit(): void {
    this.accountMenu = this.toolbarService.accountMenu;
   }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

  public toCatalogSection(event: Event) {
    event.stopPropagation()
    console.log(event.target)
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
