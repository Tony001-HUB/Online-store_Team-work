import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IComment} from "../models/icomment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  postComment(comment: IComment): Observable<void>{
    return this.http.post<void>('https://xnews.azurewebsites.net/Comments', comment)
  }

}
