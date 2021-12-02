import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _userService: UserService
  ){
  }

  canActivate(){
    let logged = this._userService.getUser();
    if(logged){
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
