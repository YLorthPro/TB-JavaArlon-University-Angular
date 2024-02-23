import {Roles} from "./Roles";
import {Validators} from "@angular/forms";

export interface Auth {
  login: string;
  token: string;
  roles: Roles[];
}

export const LOGIN_FORM ={
  login:['',[Validators.required,Validators.minLength(4)]],
  password:['',[Validators.required,Validators.minLength(4)]]
}
