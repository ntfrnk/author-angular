import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [UserService]
})
export class UserNewComponent implements OnInit {

  public user: User;

  constructor(
    public _user: UserService,
    public _router: Router
  ) {
    this.user = new User(0, '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  saveUser(form: any){
    this._user.saveUser(this.user).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/users']);
        }
      }
    );
  }

}
