import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IComment} from "../models/icomment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  postComment(comment: IComment): Observable<IComment>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('jwt-token')}`
    })
    return this.http.post<IComment>('https://xnews.azurewebsites.net/Comment', comment, {headers: headers})
  }
}
