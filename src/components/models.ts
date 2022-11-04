export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Seller {
  id: number;
  name: string;
}

export interface Order {
  orderId: number;
  product: string;
  country: string;
  price: number;
  seller: number;
}
