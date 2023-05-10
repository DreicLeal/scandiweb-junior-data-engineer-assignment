import { useContext } from "react";
import { IProduct } from "../database/databaseInterface";
import { ProductContext } from "../context/ProductContext";
import { StyledCardHome } from "../styles/CardHomeStyle";
import greenIcon from "../assets/greenIcon.svg";
import { useNavigate } from "react-router-dom";

export const ProductCard = (product: IProduct) => {
  const { currency, exchange, addToCart } = useContext(ProductContext);
  const navigate = useNavigate()
  return (
    <StyledCardHome key={product.id}>
      <img src={greenIcon} onClick={()=>addToCart(product)} className="addCart" alt="" />
      <div onClick={()=>navigate(`/product/${product.id}`)}>
      <img src={product.img["1"][0]} alt={product.name} />
      <div className="productCardInfo">
      <p>{product.name}</p>
      <p>
        {currency}{(product.price*exchange()).toFixed(2)}
      </p>
      </div>
      </div>
    </StyledCardHome>
  );
};
