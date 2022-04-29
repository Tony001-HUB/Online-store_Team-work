import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFilteredGoods, IGoods, ISortingData } from 'src/app/models/goods';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss']
})
export class FiltrationComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>();
  @Output() filtrationData = new EventEmitter<IFilteredGoods>();
  @Output() sortingData: EventEmitter<ISortingData> = new EventEmitter<ISortingData>()
  @Output() resetFilter: EventEmitter<IGoods> = new EventEmitter<IGoods>();
  filtrationForm: FormGroup;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    this.filtrationForm = new FormGroup({
      beginPrice: new FormControl(0),
      endPrice: new FormControl(999999),
      novelty: new FormControl(true),
      bestseller: new FormControl(true),
      aquadef: new FormControl(true)
    })
   }

  public search(event: any) {
    this.searchText.emit(event.target.value);
  }

  public filterGoods() {
    const filtrationFormData = {
      beginPrice: this.filtrationForm.value.beginPrice,
      endPrice: this.filtrationForm.value.endPrice,
      novelty: this.filtrationForm.value.novelty,
      bestseller: this.filtrationForm.value.bestseller,
      aquadef: this.filtrationForm.value.aquadef
    }
    this.filtrationData.emit(filtrationFormData);
  }

  public resetFiltration(event: any) {
    this.resetFilter.emit();
  }

  public sortGoods(sortData: ISortingData) {
    this.sortingData.emit(sortData)
  }

}