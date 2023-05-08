import { useContext } from "react";
import { IProduct } from "../database/databaseInterface";
import { ProductContext } from "../context/ProductContext";
import { StyledCardHome } from "../styles/CardHomeStyle";

export const ProductCard = (product: IProduct) => {
  const { currency } = useContext(ProductContext);
  return (
    <StyledCardHome>
      <img src={product.img["1"].img1} alt={product.name} />
      
      <div className="productCardInfo">
      <p>{product.name}</p>
      <p>
        {currency}{product.price}
      </p>
      </div>
    </StyledCardHome>
  );
};
