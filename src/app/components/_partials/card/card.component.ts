import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProjectService } from '../../../services/project.service';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [ProjectService, ArticleService]
})
export class CardComponent implements OnInit {

  @Input() module: any;
  @Input() id: number|null = null;
  @Input() project_id: number|null = null;
  @Input() pretitle: string|null = null;
  @Input() title: string|null = null;
  @Input() data: string|null = null;
  @Input() words: string|null = null;
  @Input() chars: string|null = null;
  @Input() link: string|null = null;
  @Input() text_link: string|null = null;
  @Input() link_status: any = null;
  @Input() status: any = null;
  @Input() link_edit: any = null;
  @Input() link_delete: any = null;
  @Input() text_delete: string = '';
  @Output() confirm = new EventEmitter<boolean>();

  constructor(
    public _project: ProjectService,
    public _article: ArticleService,
    public _router: Router
  ) {

  }

  ngOnInit(): void {
    this.link_edit = '/' + this.link_edit;
    this.link_delete = '/' + this.link_delete;
    this.link_status = '/' + this.link_status + '/' + this.id;
  }

  confirmDelete(){

    Swal.mixin({
      toast: false,
      showConfirmButton: true
    }).fire({
      icon: 'warning',
      title: 'Estás seguro?',
      text: this.text_delete,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: '#dc3545',
      showDenyButton: true,
      denyButtonText: 'No, mejor no.',
      denyButtonColor: '#CCC'
    }).then(data => {
      if(data.isConfirmed){
        this.confirm.emit(true);
      }
    });

  }

}
