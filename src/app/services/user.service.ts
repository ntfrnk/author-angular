import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from './api.service';
import { User } from '../models/user';
import { GLOBAL } from './globals';

@Injectable()
export class UserService {

  public api: string;
  public user: any;
  public token: any;

  constructor(
    public _http: HttpClient,
    public _api: Api
  ){
    this.api = GLOBAL.api;
  }

  login(user: User): Observable<any> {
    this._api.setOptions({endpoint: 'login'});
    return this._api.post(user);
  }

  getUser(){
    let user = JSON.parse(<string>localStorage.getItem('user'));
    if(user && user != undefined){
      this.user = user;
    } else {
      this.user = null;
    }
    return this.user;
  }

  getToken(){
    let token:any = localStorage.getItem('token');
    if(token && token != undefined){
      this.token = token;
    } else {
      this.token = '';
    }
    return this.token;
  }

  getAnUser(id: number){
    this._api.setOptions({endpoint: 'user/' + id});
    return this._api.get();
  }

  getUsers(){
    this._api.setOptions({endpoint: 'users'});
    return this._api.get()
  }

  saveUser(data: any){
    this._api.setOptions({endpoint: 'user/register'});
    return this._api.post(data);
  }

  updateUser(data: any){
    this._api.setOptions({endpoint: 'user/update'});
    return this._api.put(data);
  }

  deleteUser(id: number){
    this._api.setOptions({endpoint: 'user/delete/' + id});
    return this._api.delete();
  }

}
