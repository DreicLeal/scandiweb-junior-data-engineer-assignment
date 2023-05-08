import { useContext, useState } from "react";
import { DropDown } from "./DropDown";
import { CartModal } from "./CartModal";
import { StyledNav } from "../../styles/NavBarStyle";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import { ProductContext } from "../../context/ProductContext";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const sections = ["WOMEN", "MEN", "KIDS"];

  const { setSiteSection } = useContext(ProductContext);

  return (
    <StyledNav>
      <ul className="sections">
        {sections.map((section) => (
          <li onClick={() => setSiteSection(section)}>{section}</li>
        ))}
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
