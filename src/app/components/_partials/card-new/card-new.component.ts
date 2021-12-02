import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.scss']
})
export class CardNewComponent implements OnInit {

  @Input() text: string;
  @Input() button_link: string;
  @Input() button_text: string;

  constructor() {
    this.text = '';
    this.button_link = '';
    this.button_text = '';
  }

  ngOnInit(): void {
  }

}
