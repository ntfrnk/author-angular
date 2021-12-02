import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.service';

@Injectable()
export class ProjectService {

  public projects: any;

  constructor(
    public _api: Api
  ){

  }

  getProject(project_id: number) : Observable<any> {
    this._api.setOptions({endpoint: 'project/' + project_id});
    return this._api.get();
  }

  getProjects(user_id: number) : Observable<any> {
    this._api.setOptions({endpoint: 'projects/' + user_id});
    return this._api.get();
  }

  saveProject(data: any){
    this._api.setOptions({endpoint: 'project'});
    return this._api.post(data);
  }

  updateProject(data: any){
    this._api.setOptions({endpoint: 'project'});
    return this._api.put(data);
  }

  deleteProject(id: number){
    this._api.setOptions({endpoint: 'project/' + id});
    return this._api.delete();
  }

}
