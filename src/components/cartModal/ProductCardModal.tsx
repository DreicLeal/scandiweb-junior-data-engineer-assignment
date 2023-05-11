import { useContext } from "react";
import { IProduct } from "../../database/databaseInterface";
import { ProductContext } from "../../context/ProductContext";
import { Button } from "../Buttons";
import { StyledCartModalItem } from "../../styles/cartModal/CartModalItemStyle";

export const ProductCardModal = (product: IProduct) => {
  const {
    currency,
    exchange,
    addToCart,
    removeFromCart,
    productColorIndex,
    pickedColor
  } = useContext(ProductContext);

  return (
    <StyledCartModalItem key={product.id}>
      <div className="infoContainer">
        <h3>{product.name}</h3>
        <p className="price">
          {currency}
          {(product.price * exchange()).toFixed(2)}
        </p>
        <div className="sizeContainer">
          <p>Size:</p>
          <div>
            {product.size.map((size) => (
              <Button
                text={size}
                size="6"
                border="1px solid black"
                background="none"
                hover="hover1"
              />
            ))}
          </div>
        </div>
        <div className="colorContainer">
          <p>Color:</p>
          <ul>
            {product?.color.map((color, i) => (
              <li
                id={productColorIndex(product.id) === i ? "pickedColor" : ""}
                className={product.color[i]}
                key={i}
                onClick={() => pickedColor(product.id, i)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="imgContainer">
        <div className="quantity">
          <Button
            size="6"
            border="1px solid black"
            hover="hover1"
            background="none"
            text="+"
            onClick={() => addToCart(product)}
          />
          <p>{product.quantity}</p>
          <Button
            size="6"
            border="1px solid black"
            hover="hover1"
            background="none"
            text="-"
            onClick={() => removeFromCart(product)}
          />
        </div>
        <img src={product.img[`${String(productColorIndex(product.id))}`][0]} alt="" />
      </div>
    </StyledCartModalItem>
  );
};
