import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/user";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


interface IResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public registration(userData: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiUrl}/Users/register`, userData);
  }

  public login(userData: IUser): Observable<IResponse> {
    return this.http.post<IResponse>(`${environment.apiUrl}/Users/login`, userData);
  }

}
