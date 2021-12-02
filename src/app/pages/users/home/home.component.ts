import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'user-home',
  templateUrl: './home.component.html',
  styleUrls: [],
  providers: [UserService]
})
export class UserHomeComponent implements OnInit {

  public users: any;

  constructor(
    public _router: Router,
    public _user: UserService
  ) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._user.getUsers().subscribe(
      response => {
        if(response.code == 200){
          this.users = response.users;
        }
      }
    )
  }

  deleteUser(id: number){
    this._user.deleteUser(id).subscribe(
      response => {
        if(response.code == 200){
          Swal.mixin({
            toast: false,
            showConfirmButton: true
          }).fire({
            icon: 'success',
            title: 'Perfecto!',
            text: 'El usuario fue eliminado correctamente.',
            timer: 5000,
            timerProgressBar: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#007BFF',
          }).then(() => {
            this._router.navigateByUrl('/nothing', {skipLocationChange: true}).then(()=>
              this._router.navigate(['/users'])
            );
          });
        }
      }
    );
  }

}
