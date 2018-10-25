import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService implements CanActivate{

  canActivate() {

    let retorno;
    let jwtHelper = new JwtHelperService();

   /* try {

      jwtHelper.decodeToken(localStorage.getItem("token"));
      retorno = true;
    } catch (error) {
      retorno = false;
      location.href = "./";
    }

    return retorno;*/

    if (localStorage.getItem('token')) {
      // logged in so return true
      return true;
        }
  
      location.href="./";
        return false;
  }

  constructor() { }
}
