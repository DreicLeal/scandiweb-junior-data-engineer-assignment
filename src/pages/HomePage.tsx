import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../database/database";
import { ProductContext } from "../context/ProductContext";
import { StyledProductsContainer } from "../styles/ProductsContainerStyle";

export const HomePage = () => {
    const {siteSection} = useContext(ProductContext)
  return (
    <StyledProductsContainer >
      <h2>{siteSection}</h2>
      <ul>
        {products.map((product) => (
          ProductCard(product)
        ))}
      </ul>
    </StyledProductsContainer>
  );
};
