import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  public loginError: boolean = false;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.user = new User(0, '', '', '', '', '');
  }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(form: any){
    this._userService.login(this.user).subscribe(
      response => {
        if(response.code === 200){
          form.reset();
          localStorage.setItem('token', response.user.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this._router.navigate(['']);
        } else {
          this.loginError = true;
        }
      },
      error => {
        this.loginError = true;
      }
    );
  }

  logout(){
    this._route.params.subscribe(params => {
      let action = params['logout'];
      if(action == 'logout'){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this._router.navigate(['login']);
      }
    })
  }

}
