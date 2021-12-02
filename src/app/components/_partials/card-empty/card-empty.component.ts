import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-empty',
  templateUrl: './card-empty.component.html',
  styleUrls: ['./card-empty.component.scss']
})
export class CardEmptyComponent implements OnInit {

  @Input() title: string|null = null;
  @Input() text: string|null = null;
  @Input() link: string|null = null;
  @Input() text_link: string|null = null;

  constructor() {
  }

  ngOnInit(): void {

  }

}
