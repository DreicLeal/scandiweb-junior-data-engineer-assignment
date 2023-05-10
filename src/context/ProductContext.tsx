import { createContext, useEffect, useState } from "react";
import { IProduct } from "../database/databaseInterface";
import { IProductContext, IProductContextProps } from "../interfaces/context";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
  const [currency, setCurrency] = useState<string>("$");
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);
  const [siteSection, setSiteSection] = useState<string>("WOMEN");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [choosedSize, setChoosedSize] = useState<string | null>(null);
  const [choosedColor, setChoosedColor] = useState<number | undefined>(0);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartValue, setCartValue] = useState<number>(0);
  
  const exchange = () => {
    let multiplier: number;
    if (currency == "€") {
      multiplier = 0.91;
    } else if (currency == "¥") {
      multiplier = 134.95;
    } else {
      multiplier = 1;
    }
    return multiplier;
  };

  const addToCart = (pickedProduct: IProduct) => {
    const alreadyOnTheCart = cart.find(
      (cartProduct) => cartProduct.id == pickedProduct.id
    );
    if (alreadyOnTheCart) {
      alreadyOnTheCart.quantity += 1;
      const test = cart.filter((product) => product.id != alreadyOnTheCart.id);
      setCart([...test, alreadyOnTheCart]);
    } else {
      setCart([...cart, pickedProduct]);
    }
  };

  useEffect(() => {
    const totalQuantity = cart.reduce((acc, act) => acc + act.quantity, 0);
    setCartQuantity(totalQuantity)
    const totalValue = cart.reduce(
      (acc, act) => acc + act.quantity * act.price * exchange(),
      0
    );
    setCartValue(totalValue)
  }, [cart, currency]);

  return (
    <ProductContext.Provider
      value={{
        cartQuantity,
        cartValue,
        addToCart,
        exchange,
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
