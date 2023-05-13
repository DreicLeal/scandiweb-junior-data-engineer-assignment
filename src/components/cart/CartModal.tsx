import { useContext } from "react";
import { StyledCartModal } from "../../styles/cartModal/CartModalStyle";
import { Button } from "../Buttons";
import { ProductContext } from "../../context/ProductContext";
import { ProductCardModal } from "./ProductCardCart";

import { useNavigate } from "react-router-dom";

export const CartModal = () => {
  const navigate = useNavigate();

  const { currency, cartValue, cartQuantity, setIsCartOpen, cart, order } =
    useContext(ProductContext);

  const ousideModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsCartOpen(false);
    }
  };

  const viewBag = () => {
    setIsCartOpen(false);
    navigate("/cart");
  };

  return (
    <StyledCartModal onClick={ousideModalClick}>
      <div className="cartContainer">
        <h2>
          My Bag,{" "}
          <span>
            {cartQuantity} item{cartQuantity > 1 && "s"}
          </span>
        </h2>
        <>
          {cart.length > 0 ? (
            <ul className="cartItems">
              {cart.map((product) => (
                <ProductCardModal key={product.id} product={product} />
              ))}
            </ul>
          ) : (
            <h3>Cart Empty</h3>
          )}
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
              hover="hover1"
              onClick={() => viewBag()}
            />
            <Button
              background="green"
              text="CHECK OUT"
              size="1"
              color="white"
              border="none"
              hover="hover1"
              onClick={() => order()}
            />
          </div>
        </>
      </div>
    </StyledCartModal>
  );
};
