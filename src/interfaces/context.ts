import { ReactNode } from "react";
import { IProduct } from "../database/databaseInterface";

export interface IProductContext {
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
