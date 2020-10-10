export interface GoodQuote {
  items?: Items[];
  desc: string;
}

export interface Items {
  label: string;
  price: number;
  qty: number;
  total?: number;
}
