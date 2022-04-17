import { AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { IToolbar } from '../models/toolbar';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  sub: Subscription;
  accountMenu: IToolbar[] = [];
  isActive = false;

  constructor(
    private contentService: ContentService
    ) {
      this.sub = new Subscription();
    }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.accountMenu = this.contentService.accountMenu;
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}