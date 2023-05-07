import { useState } from "react";
import { DropDown } from "./DropDown";
import { CartModal } from "./CartModal";
import { StyledNav } from "../../styles/NavBarStyle";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <StyledNav>
      <ul className="sections">
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
      </ul>
      <img src={logo} alt="logo" />
      <div className="buttons">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>$</button>
        {isMenuOpen && <DropDown />}
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src={cart} alt="carrinho" />
        </button>
        {isCartOpen && <CartModal />}
      </div>
    </StyledNav>
  );
};
