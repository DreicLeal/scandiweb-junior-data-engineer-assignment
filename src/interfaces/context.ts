import { ReactNode } from "react";
import { IProduct } from "../database/databaseInterface";

export interface ChoosedColorsState {
  [productId: number]: number; 
}

export interface IProductContext {
  pickedColor: (productId: number, i: number) => void,
  productColorIndex: (productId: number) => number,
  removeFromCart: (pickedProduct: IProduct) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartQuantity: number;
  cartValue: number;
  addToCart: (pickedProduct: IProduct) => void;
  exchange: () => number;
  choosedColor:ChoosedColorsState;
  setChoosedColor: React.Dispatch<React.SetStateAction<ChoosedColorsState>>;
  choosedSize: string | null;
  setChoosedSize: React.Dispatch<React.SetStateAction<string | null>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  siteSection: string;
  setSiteSection: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface IProductContextProps {
  children: ReactNode;
}
