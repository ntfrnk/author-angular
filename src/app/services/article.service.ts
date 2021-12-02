import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.service';

@Injectable()
export class ArticleService {

  public articles: any;

  constructor(
    public _api: Api
  ){

  }

  getArticle(article_id: number) : Observable<any> {
    this._api.setOptions({endpoint: 'article/' + article_id});
    return this._api.get();
  }

  getArticles(project_id: number) : Observable<any> {
    this._api.setOptions({endpoint: 'articles/' + project_id});
    return this._api.get();
  }

  saveArticle(data: any, project_id: number){
    this._api.setOptions({endpoint: 'article/' + project_id});
    return this._api.post(data);
  }

  updateArticle(data: any){
    this._api.setOptions({endpoint: 'article'});
    return this._api.put(data);
  }

  deleteArticle(id: number){
    this._api.setOptions({endpoint: 'article/' + id});
    return this._api.delete();
  }

}
