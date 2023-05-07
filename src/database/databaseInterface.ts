type size = "XS" | "S" | "M" | "L" | "Unique";
type color = "1" | "2" | "3";

interface IImage {
  img1: string;
  img2: string;
  img3?: string;
}

export interface IProduct {
  id: string;
  name: string;
  size: size[];
  color: color[];
  img: {
    [key in color]: IImage;
  };
  price: number;
  stock: number;
}