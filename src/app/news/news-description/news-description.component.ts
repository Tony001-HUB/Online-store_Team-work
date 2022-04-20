import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {INewsInfo} from "../../models/inews-info";
import {map} from "rxjs";
import {CommentsService} from "../../services/comments.service";


@Component({
  selector: 'app-news-description',
  templateUrl: './news-description.component.html',
  styleUrls: ['./news-description.component.scss']
})
export class NewsDescriptionComponent implements OnInit {

  public newsInfo: INewsInfo;
  public formData: FormGroup;
  public rating: number = 0;
  public starCount: number = 5;
  public ratingArr: boolean[] = [];
  public snackBarDuration: number = 50000;
  public response = [
    'Вы поставили одну звезду',
    'Вы поставили две звезды',
    'Вы поставили три звезды',
    'Вы поставили четыре звезды',
    'Вы поставили пять звезд'
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private commentsService: CommentsService)
  {
    this.newsInfo = data;
    this.ratingArr = Array(this.starCount).fill(false)
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      "userId": ["", [Validators.required]],
      "content": ["", [Validators.required]],
      "postId": this.newsInfo.postId,
      "rating": this.rating
    })
  }

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
    console.log(this.rating)
  }

  onSubmit() {
    this.commentsService.postComment(this.formData.value)
    console.log(this.formData.value)
  }
}
