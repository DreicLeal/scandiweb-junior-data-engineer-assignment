export interface IProduct {
  id: number;
  brand: string;
  name: string;
  size: string[];
  color: string[];
  img: {
    [key: string]: string[];
  };
  price: number;
  quantity: number;
  stock: number;
}
