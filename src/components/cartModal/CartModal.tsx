import { useContext } from "react";
import { StyledCartModal } from "../../styles/cartModal/CartModalStyle";
import { Button } from "../Buttons";
import { ProductContext } from "../../context/ProductContext";
import { ProductCardModal } from "./ProductCardModal";

export const CartModal = () => {
  const { currency, cartValue, cartQuantity, setIsCartOpen, cart } =
    useContext(ProductContext);
  const test = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsCartOpen(false);
    }
  };
  return (
    <StyledCartModal onClick={test}>
      <div className="cartContainer">
        <h2>
          My Bag,{" "}
          <span>
            {cartQuantity} item{cartQuantity > 1 && "s"}
          </span>
        </h2>
          <ul className="cartItems">
            {cart.map((product) => ProductCardModal(product))}
          </ul>
        <div className="total">
          <p>Total</p>
          <p>
            {currency}
            {cartValue.toFixed(2)}
          </p>
        </div>
        <div className="buttons">
          <Button
            background="white"
            text="VIEW BAG"
            size="1"
            color=""
            border="1px solid"
            hover=""
          />
          <Button
            background="green"
            text="CHECK OUT"
            size="1"
            color="white"
            border="none"
            hover="1"
          />
        </div>
      </div>
    </StyledCartModal>
  );
};
