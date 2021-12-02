import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public user: User;
  public user_id: number = 0;

  constructor(
    public _router: Router,
    public _route: ActivatedRoute,
    public _user: UserService
  ) {
    this.user = new User(0, '', '', '', '', '');
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this._route.params.subscribe(params => {
      this.user_id = params['id'];
    });
    this._user.getAnUser(this.user_id).subscribe(
      response => {
        if(response.code == 200){
          this.user.id = response.user.id;
          this.user.name = response.user.name;
          this.user.lastname = response.user.lastname;
          this.user.email = response.user.email;
        }
      }
    );
  }

  updateUser(form: any){
    this._user.updateUser(this.user).subscribe(
      response => {
        if(response.code == 200) {
          this._router.navigate(['/users']);
        }
      }
    );
  }

}
