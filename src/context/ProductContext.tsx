import { createContext, useEffect, useState } from "react";
import { IProduct } from "../database/databaseInterface";
import {
  ChoosedColorsState,
  ChoosedSizeState,
  IProductContext,
  IProductContextProps,
} from "../interfaces/context";
import { products } from "../database/database";
import { useNavigate } from "react-router-dom";
import TagManager from "react-gtm-module";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductContextProps) => {
  const [currency, setCurrency] = useState<string>("$");
  const [currencyCode, setCurrencyCode] = useState<string>("USD");
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);
  const [siteSection, setSiteSection] = useState<string>("WOMEN");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [choosedSize, setChoosedSize] = useState<ChoosedSizeState>({});
  const [choosedColor, setChoosedColor] = useState<ChoosedColorsState>({});
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartValue, setCartValue] = useState<number>(0);

  const tagInfo = cart.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      dimension1: product.id,
      dimension2: product.name,
    };
  });

  const navigate = useNavigate();

  const exchange = () => {
    let multiplier: number;
    if (currency == "€") {
      setCurrencyCode("EUR");
      multiplier = 0.91;
    } else if (currency == "¥") {
      setCurrencyCode("JPY");
      multiplier = 134.95;
    } else {
      setCurrencyCode("USD");
      multiplier = 1;
    }
    return multiplier;
  };
  const addToCart = (pickedProduct: IProduct) => {
    const alreadyOnTheCart = cart.find(
      (cartProduct) => cartProduct.id == pickedProduct.id
    );
    if (pickedProduct.stock > pickedProduct.quantity) {
      if (alreadyOnTheCart) {
        alreadyOnTheCart.quantity++;
        const currentProducts = cart.filter(
          (product) => product.id !== alreadyOnTheCart.id
        );
        setCart([...currentProducts, alreadyOnTheCart]);
      } else {
        pickedProduct.quantity = 1;
        setCart([...cart, pickedProduct]);
      }
    }

    TagManager.dataLayer({
      dataLayer: {
        event: "addToCart",
        ecommerce: {
          currencyCode: currencyCode,
          add: {
            products: [...tagInfo],
          },
        },
      },
    });
  };

  const removeFromCart = (pickedProduct: IProduct) => {
    const productToDecrease = cart.find(
      (product) => product.id === pickedProduct.id
    );
    if (!productToDecrease) {
      return;
    }
    if (productToDecrease.quantity > 1) {
      const remainProducts = cart.map((product) => {
        if (product.id === productToDecrease?.id) {
          return { ...product, quantity: (product.quantity -= 1) };
        }
        return product;
      });

      setCart(remainProducts);
    } else {
      const remainProducts = cart.filter(
        (product) => product.id !== productToDecrease?.id
      );
      console.log(remainProducts);
      setCart(remainProducts);
    }

    TagManager.dataLayer({
      dataLayer: {
        event: "removeFromCart",
        ecommerce: {
          currencyCode: currencyCode,
          add: {
            products: [...tagInfo],
          },
        },
      },
    });
  };

  const pickedColor = (productId: number, i: number) => {
    setChoosedColor((choosedColor) => {
      const updatedColors = { ...choosedColor };
      updatedColors[productId] = i;
      return updatedColors;
    });
  };

  const productColorIndex = (productId: number) => {
    return choosedColor[productId] !== undefined ? choosedColor[productId] : 0;
  };

  const pickedSize = (productId: number, i: number) => {
    setChoosedSize((choosedSize) => {
      const updateSize = { ...choosedSize };
      updateSize[productId] = i;
      return updateSize;
    });
  };
  const productSizeIndex = (productId: number) => {
    return choosedSize[productId] !== undefined ? choosedSize[productId] : 0;
  };

  useEffect(() => {
    const totalQuantity = cart.reduce((acc, act) => acc + act.quantity, 0);
    setCartQuantity(totalQuantity);
    const totalValue = cart.reduce(
      (acc, act) => acc + act.quantity * act.price * exchange(),
      0
    );
    setCartValue(totalValue);
  }, [cart, currency]);

  const order = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "checkout",
        ecommerce: {
          currencyCode: currencyCode,
          checkout: {
            actionField: {
              step: 1,
              option: "CartPage",
              products: [...tagInfo],
            },
          },
        },
      },
    });

    cart.forEach((cartProduct) =>
      products.map((stockProduct) => {
        stockProduct.id == cartProduct.id &&
          (stockProduct.stock -= cartProduct.quantity);
      })
    );
    setCart([]);
    navigate("/");
  };

  return (
    <ProductContext.Provider
      value={{
        currencyCode,
        order,
        pickedSize,
        productSizeIndex,
        pickedColor,
        productColorIndex,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
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
