import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/user";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
import jwt_decode from "jwt-decode";

interface Token {
  accessToken: string,
  refreshToken: string
}

interface JwtOptions {
  nbf: number,
  exp: number
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private decoded: JwtOptions;

  constructor(private http: HttpClient) { }

  public registration(userData: IUser): Observable<string> {
    return this.http.post(`${environment.apiUrl}/Users/register`,
      {
        userName: userData.userName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        password: userData.password},
      {responseType: 'text'});
  }

  public login(userData: IUser): Observable<any> {
    return this.http.post<Token>(`${environment.apiUrl}/Users/login`, userData)
      .pipe(
        map(response => response),
        tap(this.setToken),
      )
  }

  public setToken(response: Token) {
    if (response) {
      this.decoded = jwt_decode(response.accessToken);
      const endTokenTimeRent = new Date(this.decoded.exp * 1000);
      localStorage.setItem('jwt-token-end', endTokenTimeRent.toString());
      localStorage.setItem('jwt-token', response.accessToken);
      localStorage.setItem('refresh-token', response.refreshToken);
    } else {
      localStorage.clear();
    }
  }

  public setLogin(login: string) {
    localStorage.setItem('user-login', login);
  }
}
