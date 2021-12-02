import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _user: UserService
  ){ }

  canActivate(){
    let role = this._user.getUser().role;
    if(role == 'admin'){
      return true;
    } else {
      this._router.navigate(['/projects']);
      return false;
    }
  }

}
