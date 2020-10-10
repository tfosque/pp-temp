import { Component, Input, OnInit } from '@angular/core';
import { GoodQuote, Items } from '../models/good-quote';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() quote: GoodQuote[] = [];
  subtotal: number;
  total = 0;
  tax = .0725;
  constructor() { }

  ngOnInit() {
    const subtotalItems = this.quote[0].items.map((m: Items) => m.price * m.qty);
    const subtotal = subtotalItems.reduce((a, b) => a + b, 0);
    const tax = parseInt((subtotal * this.tax).toFixed(2), 10);
    const total = subtotal + tax;

    this.subtotal = subtotal;
    this.total = total;

  /*   console.log({ subtotalItems });
    console.log({ subtotal }, { tax });
    console.log({ total });
    console.log('this:', this); */

  }

}
