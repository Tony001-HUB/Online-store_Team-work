import { AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IToolbar } from '../models/toolbar';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  accountMenu: IToolbar[] = [];
  isActive = false;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.accountMenu = this.contentService.accountMenu;
  }
}