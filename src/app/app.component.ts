import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public user: any;
  public token: any;

  constructor(
    public _userService: UserService
  ){
    this.loadUser();
  }

  ngOnInit(){
    this.loadUser();
  }

  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.user = this._userService.getUser();
    this.token = this._userService.getToken();
  }

}
