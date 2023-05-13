import { useContext, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../database/database";
import { ProductContext } from "../context/ProductContext";
import { StyledProductsContainer } from "../styles/ProductsContainerStyle";
import { CartModal } from "../components/cart/CartModal";
import TagManager from "react-gtm-module";

export const HomePage = () => {
  const tagInfo = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
  });

  const { siteSection, isCartOpen, currencyCode } = useContext(ProductContext);
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "impressions",
        ecommerce: {
          currencyCode: currencyCode,
          impressions: [...tagInfo],
        },
      },
    });
  }, []);
  return (
    <StyledProductsContainer>
      {isCartOpen && <CartModal />}
      <h2>{siteSection}</h2>
      {siteSection === "WOMEN" ? (
        <ul>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </ul>
      ) : (
        <h2>Section not implemented yet.</h2>
      )}
    </StyledProductsContainer>
  );
};
