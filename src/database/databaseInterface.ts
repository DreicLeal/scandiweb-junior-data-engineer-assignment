export interface IProduct {
  id: string;
  name: string;
  size: string[];
  color: string[];
  img: {
    [key: string]: string[];
  };
  price: number;
  stock?: number;
}