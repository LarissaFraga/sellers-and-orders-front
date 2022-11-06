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
