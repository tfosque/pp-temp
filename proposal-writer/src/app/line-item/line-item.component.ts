import { Component, OnInit } from '@angular/core';

interface Items {
  label: string;
  price: number;
  qty: number;
  total?: number;
}
interface GoodQuote {
  items: Items[];
  desc: string;
}
@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  // @Input() goodQuote: Items;
  // goodQuote: Items[] = null;
  total: number;

  goodQuote = [{
    id: 1,
    desc: 'Good',
    items: [
      {
        label: 'Metal',
        price: 86.03,
        qty: 2
      },
      {
        label: 'Glue',
        price: 6.03,
        qty: 12
      },
      {
        label: 'Nails',
        price: 1.03,
        qty: 32
      },
      {
        label: 'Paint',
        price: 16.23,
        qty: 11
      },
      {
        label: 'Shingle',
        price: 116.53,
        qty: 110
      }
    ]
  }];

  constructor() { }

  ngOnInit() {
    console.log('good_quote:', this.goodQuote[0].items);
    // this.goodQuote = this.data[0].items[0];
  }

}
