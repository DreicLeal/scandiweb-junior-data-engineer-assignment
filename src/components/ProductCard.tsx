import { useContext } from "react";
import { IProduct } from "../database/databaseInterface";
import { ProductContext } from "../context/ProductContext";
import { StyledCardHome } from "../styles/CardHomeStyle";
import greenIcon from "../assets/greenIcon.svg";

export const ProductCard = (product: IProduct) => {
  const { currency } = useContext(ProductContext);
  return (
    <StyledCardHome key={product.id}>
      <img src={product.img["1"].img1} alt={product.name} />
      <img src={greenIcon} className="addCart" alt="" />
      <div className="productCardInfo">
      <p>{product.name}</p>
      <p>
        {currency}{product.price}
      </p>
      </div>
    </StyledCardHome>
  );
};
