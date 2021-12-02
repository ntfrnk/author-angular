import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './globals';

@Injectable()
export class Api {

  public apiURL: string;
  public endpoint: string = '';
  public token: any = '';

  constructor(
    public _http: HttpClient
  ){
    this.apiURL = GLOBAL.api;
    this.token = localStorage.getItem('token');
  }

  /*
  * Set the options
  *
  * @param Object data
  **/
  setOptions(options: any): void {
    this.endpoint = options.endpoint;
    if(options.token){
      this.token = options.token;
    }
  }

  /*
  * Send a GET request to API
  *
  * @param Object data
  **/
  get(): Observable <any> {

    let headers:HttpHeaders;

    if(this.token != ''){
      headers = new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': this.token
      });
    } else {
      headers = new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded'
      });
    }

    let options: any = {
      headers: headers
    }
    return this._http.get(this.apiURL + this.endpoint, options);
  }

  /*
  * Send a POST request to API
  *
  * @param Object data
  **/
  post(data: any): Observable <any> {

    let json:string = JSON.stringify(data);
    let params:string = 'json='+json;

    let headers:HttpHeaders = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': this.token
    });

    return this._http.post(this.apiURL + this.endpoint, params, {headers: headers});
  }

  /*
  * Send a PATCH request to API
  *
  * @param Object data
  **/
  put(data: any): Observable <any> {

    let json:string = JSON.stringify(data);
    let params:string = 'json='+json;

    let headers:HttpHeaders = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': this.token
    });

    return this._http.put(this.apiURL + this.endpoint, params, {headers: headers});
  }

  /*
  * Send a PATCH request to API
  *
  * @param Object data
  **/
  delete(): Observable <any> {

    let headers:HttpHeaders = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': this.token
    });

    return this._http.delete(this.apiURL + this.endpoint, {headers: headers});
  }

}
