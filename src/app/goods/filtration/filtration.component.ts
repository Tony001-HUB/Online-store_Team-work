import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFilteredGoods } from 'src/app/models/goods';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.scss']
})
export class FiltrationComponent implements OnInit {
  @Output() searchText = new EventEmitter<string>();
  @Output() filtrationData = new EventEmitter<IFilteredGoods>();
  filtrationForm: FormGroup;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    this.filtrationForm = new FormGroup({
      beginPrice: new FormControl(0),
      endPrice: new FormControl(9999999),
      novelty: new FormControl(false),
      bestseller: new FormControl(false),
      aquadef: new FormControl(false)
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
    console.log(filtrationFormData)
    this.filtrationData.emit(filtrationFormData);
  }

}