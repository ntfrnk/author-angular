import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Api } from '../../../services/api.service';
import { UserService } from '../../../services/user.service';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [Api, UserService, ProjectService]
})
export class ProjectEditComponent implements OnInit {

  public project: Project;
  public project_id: number = 0;

  constructor(
    public _user: UserService,
    public _project: ProjectService,
    public _router: Router,
    public _route: ActivatedRoute
  ) {
    this.project = new Project(0, 0, '', '');
    this._route.params.subscribe(params => {
      this.project_id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    this._project.getProject(this.project_id).subscribe(
      response => {
        this.project.id = response.project.id;
        this.project.user_id = response.project.user_id;
        this.project.name = response.project.name;
        this.project.description = response.project.description;
      }
    );
  }

  updateProject(form: any) {
    this._project.updateProject(this.project).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/projects']);
        }
      }
    );
  }

}
