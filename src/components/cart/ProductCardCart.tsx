import { useContext, useState } from "react";
import { IProduct } from "../../database/databaseInterface";
import { ProductContext } from "../../context/ProductContext";
import { Button } from "../Buttons";
import { StyledCartItem } from "../../styles/cartModal/CartItemStyle";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
export const ProductCardModal = (product: IProduct) => {
  const {
    currency,
    exchange,
    addToCart,
    removeFromCart,
    productColorIndex,
    pickedColor,
    productSizeIndex,
    pickedSize,
  } = useContext(ProductContext);
  const cartPage = window.location.pathname === "/cart";
  const [imgIndex, setImgIndex] = useState(0);
  const nextImg = () => {
    if (
      imgIndex <
      product.img[`${String(productColorIndex(product.id))}`].length - 1
    ) {
      setImgIndex(imgIndex + 1);
    }
  };

  const previousImg = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <>
    {cartPage && <div className="trace"></div>}
    <StyledCartItem key={product.id}>
      <div className={`infoContainer ${cartPage && "cartPage"}`}>
        <h3 className={cartPage? "brandCart": "brandModal"}>{product.brand}</h3>
        <h3 className={cartPage? "nameCart": "nameModal"}>{product.name}</h3>
        <p className="price">
          {currency}
          {(product.price * exchange()).toFixed(2)}
        </p>
        <div className="sizeContainer">
          <p className={cartPage?"subtitlesCartPage":"subtitlesCartModal"}>{cartPage ? "SIZE:" : "Size:"}</p>
          <div>
            {product.size.map((size, i) => (
              <Button
                key={i}
                text={size}
                id={productSizeIndex(product.id) === i ? "pickedSize" : ""}
                size={cartPage ? "3" : "6"}
                border="1px solid black"
                background="none"
                hover="hover1"
                onClick={() => pickedSize(product.id, i)}
              />
            ))}
          </div>
        </div>
        <div className="colorContainer">
          <p className={cartPage?"subtitlesCartPage":"subtitlesCartModal"}>{cartPage ? "COLOR:" : "Color:"}</p>
          <ul>
            {product?.color.map((color, i) => (
              <li
                id={productColorIndex(product.id) === i ? "pickedColor" : ""}
                className={`${product.color[i]} ${
                  cartPage ? "cartColorSquare" : "cartModalSquare"
                }`}
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
            size={cartPage ? "5" : "6"}
            border="1px solid black"
            hover="hover1"
            background="none"
            text="+"
            onClick={() => addToCart(product)}
          />
          <p>{product.quantity}</p>
          <Button
            size={cartPage ? "5" : "6"}
            border="1px solid black"
            hover="hover1"
            background="none"
            text="-"
            onClick={() => removeFromCart(product)}
          />
        </div>
        <div className="imgCarrousselContainer">
          {cartPage && (
            <div className="imgButtons">
              <img src={minus} onClick={() => previousImg()} />
              <img src={plus} onClick={() => nextImg()} />
            </div>
          )}
          <img
            className={`currentImg ${cartPage && "cartPageImg"}`}
            src={
              product.img[`${String(productColorIndex(product.id))}`][imgIndex]
            }
            alt={product.name}
          />
        </div>
      </div>
    </StyledCartItem>
    </>
  );
};
