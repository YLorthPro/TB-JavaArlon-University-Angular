import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";
import {Auth} from "../models/Auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedUser = new BehaviorSubject<Auth | null>(null)
  constructor(private readonly _httpClient: HttpClient,
              private readonly _router: Router,
              @Inject('urlBackEnd') private readonly _urlBack: string) { }

  login(auth: Auth) {
      return this._httpClient.post<Auth>(`${this._urlBack}/auth/login`, auth).pipe(
        tap(value => {
          localStorage.setItem('token', value.token);
          localStorage.setItem('roles', value.roles.toString());
          localStorage.setItem('login', value.login);
          this.connectedUser.next(value);
          this._router.navigate(['section'])
        })
      );
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('login');
    this.connectedUser.next(null);
    this._router.navigate(['login'])
  }
}
