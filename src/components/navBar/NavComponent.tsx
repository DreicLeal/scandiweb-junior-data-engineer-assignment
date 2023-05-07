import { useState } from "react";
import { DropDown } from "./DropDown";
import { CartModal } from "./CartModal";

export const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header>
      <ul className="sections">
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
      </ul>
      <img src="../assets/a-logo.png" alt="logo" />
      <div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>$</button>
        {isMenuOpen && <DropDown />}
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          {"../assets/cart.png"}
        </button>
        {isCartOpen && <CartModal />}
      </div>
    </header>
  );
};
