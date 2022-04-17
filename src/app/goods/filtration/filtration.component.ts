import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss']
})
export class FiltrationComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>()
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void { }

  public search(event: any) {
    this.searchText.emit(event.target.value);
  }

}