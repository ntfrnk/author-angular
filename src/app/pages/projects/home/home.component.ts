import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Api } from '../../../services/api.service';
import { UserService } from '../../../services/user.service';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'project-home',
  templateUrl: './home.component.html',
  styleUrls: [],
  providers: [Api, UserService, ProjectService]
})
export class ProjectHomeComponent implements OnInit {

  public projects: any;
  public project: any;
  public confirm: boolean = false;

  constructor(
    public _user: UserService,
    public _project: ProjectService,
    public _router: Router
  ) {

  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._project.getProjects(this._user.getUser().id).subscribe(
      response => {
        this.projects = response.projects;
      }
    );
  }

  deleteProject(id: number){
    this._project.deleteProject(id).subscribe(data => {
      if(data.code == 200){
        Swal.mixin({
          toast: false,
          showConfirmButton: true
        }).fire({
          icon: 'success',
          title: 'Perfecto!',
          text: 'El escrito fue eliminado correctamente.',
          timer: 5000,
          timerProgressBar: true,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#007BFF',
        }).then(() => {
          this._router.navigateByUrl('/nothing', {skipLocationChange: true}).then(()=>
            this._router.navigate(['/projects'])
          );
        });
      }
    });
  }

}
