import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../database/databaseInterface";
import { IProductContext, IProductContextProps } from "../interfaces/context";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
  const [currency, setCurrency] = useState<string>("$");
  const [cart, setCart] = useState<IProduct[] | null>(null);
  const [siteSection, setSiteSection] = useState<string>("WOMEN");

  const navigate = useNavigate();

  return (
    <ProductContext.Provider
      value={{ currency, setCurrency, cart, setCart, siteSection, setSiteSection }}
    >
      {children}
    </ProductContext.Provider>
  );
};
