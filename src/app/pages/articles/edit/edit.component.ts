import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/article';
import { Api } from '../../../services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ArticleService, Api]
})
export class ArticleEditComponent implements OnInit {

  public article: any;
  public article_id: number = 0;

  public options: Object = {
    width: '600'
  }

  constructor(
    public _article: ArticleService,
    public _route: ActivatedRoute,
    public _router: Router
  ) {
    this.article = new Article(0, 0, 0, 0, '', '', 0, 0, 0);
    this._route.params.subscribe(params => {
      this.article_id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    this._article.getArticle(this.article_id).subscribe(
      response => {
        if(response.code == 200){
          this.article = new Article(
            response.article.id,
            response.article.user_id,
            response.article.project_id,
            response.article.chapter_id,
            response.article.title,
            response.article.content,
            0,
            0,
            0
          );
        }
      }
    );
  }

  updateArticle(form: any) {
    this.article.content = form.value.content.replace(/&nbsp;/g, ' ');
    this._article.updateArticle(this.article).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/articles/' + this.article.project_id]);
        }
      }
    );
  }

}
