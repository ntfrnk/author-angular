import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Api } from '../../../services/api.service';
import { UserService } from '../../../services/user.service';
import { ProjectService } from '../../../services/project.service';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'article-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService, ArticleService, ProjectService, Api]
})
export class ArticleHomeComponent implements OnInit {

  public articles: any;
  public project_id: any;
  public project: any;
  public confirm: boolean = false;

  constructor(
    public _user: UserService,
    public _article: ArticleService,
    public _project: ProjectService,
    public _route: ActivatedRoute,
    public _router: Router
  ) {
    this._route.params.subscribe(params => {
      this.project_id = params['project_id'];
    });
    this.project = '';
  }

  ngOnInit(): void {
    this.getProject();
    this.getArticles();
  }

  getProject(){
    this._project.getProject(this.project_id).subscribe(
      response => {
        this.project = response.project;
      }
    );
  }

  getArticles() {
    this._article.getArticles(this.project_id).subscribe(
      response => {
        this.articles = response.articles;
      }
    );
  }

  deleteArticle(id: number){
    this._article.deleteArticle(id).subscribe(
      response => {
        if(response.code == 200){
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
              this._router.navigate(['/articles/' + this.project_id])
            );
          });
        }
      }
    );
  }

}
