import { Component } from '@angular/core';
import {Auth} from "../../models/Auth";
import {AuthService} from "../../services/auth.service";
import {map} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userConnected = this._authService.connectedUser.pipe(
    map(u => u?.login)
  )

  constructor(private readonly _authService: AuthService) {
  }

  logout(){
    this._authService.logout();
  }

}
