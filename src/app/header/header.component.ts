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
  modelChanged: Subject<string> = new Subject<string>();
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
    this.modelChanged.pipe(
      debounceTime(1500)
    ).subscribe({
      next: (text) => {
        console.log(text)
      }
    })
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

  public search(event) {
    this.modelChanged.next(event.target.value)
  }
}