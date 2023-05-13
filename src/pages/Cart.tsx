import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCardModal } from "../components/cart/ProductCardCart";
import { StyledCart } from "../styles/CartStyle";
import { Button } from "../components/Buttons";

export const Cart = () => {
  const { currency, cartValue, cartQuantity, cart, order } =
    useContext(ProductContext);
  return (
    <StyledCart>
      <h2>CART</h2>
      <ul className="cartItems">
        {cart.map((product) => (
          <ProductCardModal key={product.id} product={product} />
        ))}
      </ul>
      <div className="summary">
        <div className="flex">
          <p className="title">Tax 21%:</p>
          <p className="info">
            {currency}
            {(cartValue * 0.21).toFixed(2)}
          </p>
        </div>
        <div className="flex">
          <p className="title">Quantity:</p>
          <p className="info">{cartQuantity}</p>
        </div>
        <div className="flex">
          <p className="title">Total:</p>
          <p className="info">
            {currency}
            {cartValue.toFixed(2)}
          </p>
        </div>
        <Button
          onClick={() => order()}
          size="2"
          text="ORDER"
          background="green"
          color="white"
          border="none"
          hover="hover1"
        />
      </div>
    </StyledCart>
  );
};
