import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";
import {Auth} from "../models/Auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedUser = new BehaviorSubject<Auth | null>(null)
  constructor(private readonly _httpClient: HttpClient,
              @Inject('urlBackEnd') private readonly _urlBack: string) { }

  login(auth: Auth) {
      this._httpClient.post<Auth>(`${this._urlBack}/auth/login`, auth).pipe(
        tap(value => {
          localStorage.setItem('token', value.token);
          localStorage.setItem('roles', value.roles.toString());
          localStorage.setItem('login', value.login);
          this.connectedUser.next(value);
        })
      );
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('login');
    this.connectedUser.next(null);
  }
}
