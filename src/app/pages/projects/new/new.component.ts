import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../../services/api.service';
import { UserService } from '../../../services/user.service';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [Api, UserService, ProjectService]
})
export class ProjectNewComponent implements OnInit {

  public project: Project;

  constructor(
    public _user: UserService,
    public _project: ProjectService,
    public _router: Router
  ) {
    this.project = new Project(0, 0, '', '');
  }

  ngOnInit(): void {
  }

  saveProject(form: any) {
    this._project.saveProject(this.project).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/projects']);
        }
      }
    );
  }

}
