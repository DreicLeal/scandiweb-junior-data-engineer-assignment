import { createContext, useState } from "react";
import { IProduct } from "../database/databaseInterface";
import { IProductContext, IProductContextProps } from "../interfaces/context";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
  const [currency, setCurrency] = useState<string>("$");
  const [cart, setCart] = useState<IProduct[] | null>(null);
  const [siteSection, setSiteSection] = useState<string>("WOMEN");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [choosedSize, setChoosedSize] = useState<string | null>(null);
  const [choosedColor, setChoosedColor] = useState<number| undefined>(0);

  return (
    <ProductContext.Provider
      value={{
        choosedColor,
        setChoosedColor,
        choosedSize,
        setChoosedSize,
        isMenuOpen,
        setIsMenuOpen,
        currency,
        setCurrency,
        cart,
        setCart,
        siteSection,
        setSiteSection,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
