import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../database/database";
import { ProductContext } from "../context/ProductContext";
import { StyledProductsContainer } from "../styles/ProductsContainerStyle";
import { CartModal } from "../components/cartModal/CartModal";

export const HomePage = () => {
  const { siteSection, isCartOpen } = useContext(ProductContext);
  return (
    <>
      <StyledProductsContainer>
        {isCartOpen && <CartModal />}
        <h2>{siteSection}</h2>
        <ul>{products.map((product) => ProductCard(product))}</ul>
      </StyledProductsContainer>
    </>
  );
};
