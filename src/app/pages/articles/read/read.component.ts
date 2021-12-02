import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../../services/api.service';
import { GLOBAL } from '../../../services/globals';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  providers: [Api]
})
export class ArticleReadComponent implements OnInit {

  public article: any;
  public article_id: number = 0;

  constructor(
    public _api: Api,
    public _route: ActivatedRoute
  ) {
    this.setArticle();
  }

  ngOnInit(): void {
  }

  setArticle(){
    this._route.params.subscribe(params => {
      this.article_id = params['id'];
    });

    let endpoint = 'article/' + this.article_id;

    this._api.setOptions({endpoint: endpoint});

    this._api.get().subscribe(
      complete => {
        if(complete.code == 200){
          this.article = complete.article;
        } else {
          this.article = null;
        }
      },
      error => {
        console.log('ERROR');
      }
    );

  }

}
