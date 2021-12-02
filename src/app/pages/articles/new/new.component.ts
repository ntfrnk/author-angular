import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/article';
import { Api } from '../../../services/api.service';
import { Utilities } from '../../../services/utilities.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [Api, ArticleService, Utilities]
})
export class ArticleNewComponent implements OnInit {

  public article: any;
  public project_id: number = 0;

  public options: Object = {
    width: '600'
  }

  constructor(
    public _article: ArticleService,
    public _router: Router,
    public _route: ActivatedRoute,
    public _util: Utilities
  ) {
    this.article = new Article(0, 0, 0, 0, '', '', 0, 0, 0);
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.project_id = params['project_id'];
      this.article.project_id = params['project_id'];
    });
  }

  saveArticle(form: any) {
    this.article.content = form.value.content.replace(/&nbsp;/g, ' ');
    this._article.saveArticle(this.article, this.project_id).subscribe(
      response => {
        if(response.code == 200){
          console.log(response);
          this._router.navigate(['/articles/' + this.project_id]);
        }
      }
    );
  }

}
