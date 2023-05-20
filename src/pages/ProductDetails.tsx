import { useParams } from "react-router-dom";
import { products } from "../database/database";
import { StyledCardDetail } from "../styles/CardDetailsStyle";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Button } from "../components/Buttons";
import { CartModal } from "../components/cart/CartModal";
import TagManager from "react-gtm-module";

export const ProductDetails = () => {
  const { id } = useParams();
  const {
    productSizeIndex,
    pickedSize,
    currency,
    exchange,
    addToCart,
    isCartOpen,
    pickedColor,
    productColorIndex,
  } = useContext(ProductContext);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const productPage = products.find((product) => product.id == +id!);

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "detail",
        ecommerce: {
          detail: {
            products: [
              {
                id: productPage?.id,
                name: productPage?.name,
                price: productPage?.price,
              },
            ],
          },
        },
      },
    });
  }, []);

  return (
    <StyledCardDetail>
      {isCartOpen && <CartModal />}
      <div className="imgsContainer">
        <ul>
          {productPage?.img[`${String(productColorIndex(productPage.id))}`].map(
            (img, i) => (
              <li key={i} onClick={() => setImgIndex(i)}>
                <img src={`${img}`} alt="" />
              </li>
            )
          )}
        </ul>
        <img
          className="mainImage"
          src={`${
            productPage?.img[`${String(productColorIndex(productPage.id))}`][
              imgIndex
            ]
          }`}
          alt=""
        />
      </div>
      <div className="productInfo">
        <h3>{productPage?.name}</h3>
        <div className="sizeContainer">
          <p>SIZE:</p>
          <ul>
            {productPage?.size.map((size, i) => (
              <li
                id={productSizeIndex(productPage.id) === i ? "pickedSize" : ""}
                key={i}
                onClick={() => pickedSize(productPage.id, i)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="colorContainer">
          <p>COLOR:</p>
          <ul>
            {productPage?.color.map((_color, i) => (
              <li
                id={
                  productColorIndex(productPage.id) === i ? "pickedColor" : ""
                }
                className={productPage.color[i]}
                key={i}
                onClick={() => pickedColor(productPage.id, i)}
              ></li>
            ))}
          </ul>
        </div>
        <div className="price">
          <p>PRICE:</p>
          <p>
            {currency}
            {(productPage!.price * exchange()).toFixed(2)}
          </p>
        </div>
        <Button
          onClick={() => addToCart(productPage!)}
          background="green"
          text="ADD TO CART"
          size="2"
          color="white"
          border="none"
          hover="hover1"
        />
      </div>
    </StyledCardDetail>
  );
};
