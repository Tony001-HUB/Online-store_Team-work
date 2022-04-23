import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {


  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];

  snackBarDuration = 50000;
  response = [
    'Вы поставили одну звезду',
    'Вы поставили две звезды',
    'Вы поставили три звезды',
    'Вы поставили четыре звезды',
    'Вы поставили пять звезд'
  ]


  constructor(private snackBar: MatSnackBar) {
    this.ratingArr = Array(this.starCount).fill(false)
  }

  ngOnInit(): void {}


  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });

  }

}
