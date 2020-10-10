import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../models/good-quote';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  @Input() goodQuote: Items;
  total: number;

  constructor() { }

  ngOnInit() {
    console.log('good_quote:', this.goodQuote[0].items);
    // this.goodQuote = this.data[0].items[0];
  }

}
