import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCardModal } from "../components/cartModal/ProductCardModal";

export const Cart = () => {
  const { currency, cartValue, cartQuantity, setIsCartOpen, cart } =
    useContext(ProductContext);
  return (
    <div className="cartContainer">
      <h2>CART</h2>
      <ul className="cartItems">
        {cart.map((product) => ProductCardModal(product))}
      </ul>
      <div className="summary">
        <div className="tax ">
          <p>Tax 21%:</p>
          <p>{currency}{(cartValue*.21).toFixed(2)}</p>
        </div>
        <div className="quantity">
          <p>Quantity:</p>
          <p>{cartQuantity}</p>
        </div>
        <div className="totalValue">
          <p>Total:</p>
          <p>
            {currency}
            {cartValue.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
