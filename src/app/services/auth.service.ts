import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/user";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
import jwt_decode from "jwt-decode";

interface IResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private decoded: any;

  constructor(private http: HttpClient) { }

  public registration(userData: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiUrl}/Users/register`, userData)
      .pipe(map(token => token) ,tap(this.setToken));
  }

  public login(userData: IUser): Observable<IResponse> {
    return this.http.post<IResponse>(`${environment.apiUrl}/Users/login`, userData);
  }

  setToken(token: any) {
    this.decoded = jwt_decode(token.accessToken);
    console.log('this decode',this.decoded)
  }

}
