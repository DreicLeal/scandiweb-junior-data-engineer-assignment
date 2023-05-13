import { useContext } from "react";
import { IProduct } from "../database/databaseInterface";
import { ProductContext } from "../context/ProductContext";
import { StyledCardHome } from "../styles/CardHomeStyle";
import greenIcon from "../assets/greenIcon.svg";
import { useNavigate } from "react-router-dom";
import TagManager from "react-gtm-module";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const { currency, exchange, addToCart } = useContext(ProductContext);
  const navigate = useNavigate();
  const clickedProduct = (product: IProduct) => {
    navigate(`/product/${product.id}`);
    TagManager.dataLayer({
      dataLayer: {
        event: "productClick",
        ecommerce: {
          click: {
            actionField: {
              list: "",
              product: {
                id: product.id,
                name: product.name,
                price: product.price,
              },
            },
          },
        },
      },
    });
  };
  return (
    <StyledCardHome key={product.id}>
      <img
        src={greenIcon}
        onClick={() => addToCart(product)}
        className="addCart"
        alt=""
      />
      <div onClick={() => clickedProduct(product)}>
        <div className="imgContainer">
          {product.stock == 0 && <div className="outOfStock">OUT OF STOCK</div>}
          <img src={product.img["0"][0]} alt={product.name} />
        </div>
        <div className="productCardInfo">
          <p>
            {product.brand} {product.name}
          </p>
          <p>
            {currency}
            {(product.price * exchange()).toFixed(2)}
          </p>
        </div>
      </div>
    </StyledCardHome>
  );
};
