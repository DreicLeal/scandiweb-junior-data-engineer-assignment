import { ReactNode } from "react";
import { IProduct } from "../database/databaseInterface";

export interface IProductContext {
  exchange: () => number;
  choosedColor:number| undefined;
  setChoosedColor: React.Dispatch<React.SetStateAction<number| undefined>>;
  choosedSize:string|null;
  setChoosedSize:React.Dispatch<React.SetStateAction<string|null>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  siteSection: string;
  setSiteSection: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  cart: IProduct[] | null;
  setCart: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
}

export interface IProductContextProps {
  children: ReactNode;
}
