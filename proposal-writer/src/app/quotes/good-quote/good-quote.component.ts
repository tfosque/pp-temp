import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-quote',
  templateUrl: './good-quote.component.html',
  styleUrls: ['./good-quote.component.scss']
})
export class GoodQuoteComponent implements OnInit {
  goodQuote = [{
    id: 1,
    desc: 'Good',
    items: [
      {
        label: 'Architectural Shingles - Remove & Replace Existing',
        price: 86.03,
        qty: 2
      },
      {
        label: 'Ice & Water membrane (eaves and valleys)',
        price: 6.03,
        qty: 12
      },
      {
        label: 'Synthetic Underlay - adds a second layer of protection over your entire roof',
        price: 1.03,
        qty: 32
      },
      {
        label: 'Drip Edge',
        price: 16.23,
        qty: 11
      },
      {
        label: 'Valley Metal',
        price: 126.53,
        qty: 4
      },
      {
        label: 'Roof Vent (Standard)',
        price: 12.17,
        qty: 3
      },
      {
        label: 'Gooseneck (Exhaust Vent)',
        price: 122.33,
        qty: 1
      },
      {
        label: 'Plumbing Flashing - 4" Oatey',
        price: 12.12,
        qty: 11
      },
      {
        label: 'High Roof',
        price: 216.53,
        qty: 10
      }
    ]
  }];

  subtotal: number;
  // tax: number;
  total: number;
  tax: number;
  constructor() { }

  ngOnInit() {
    this.calcTotals();
  }

  calcTotals() {
    const [items] = this.goodQuote;
    const subtotal = items.items.map(m => m.price * m.qty);
    const reduced = subtotal.reduce((a, b) => a + b, 0);
    this.subtotal = reduced;

/*     console.log({items});
    console.log({subtotal});
    console.log({reduced}); */
  }

}
