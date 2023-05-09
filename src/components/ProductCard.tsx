import { useContext } from "react";
import { IProduct } from "../database/databaseInterface";
import { ProductContext } from "../context/ProductContext";
import { StyledCardHome } from "../styles/CardHomeStyle";
import greenIcon from "../assets/greenIcon.svg";
import { useNavigate } from "react-router-dom";

export const ProductCard = (product: IProduct) => {
  const { currency } = useContext(ProductContext);
  const navigate = useNavigate()
  return (
    <StyledCardHome key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
      <img src={product.img["1"][0]} alt={product.name} />
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
