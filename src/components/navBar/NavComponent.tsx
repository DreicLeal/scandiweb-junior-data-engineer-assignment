import { useContext, useState } from "react";
import { DropDown } from "./DropDown";
import { CartModal } from "./CartModal";
import { StyledNav } from "../../styles/NavBarStyle";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const sections = ["WOMEN", "MEN", "KIDS"];

  const { setSiteSection, currency, isMenuOpen, setIsMenuOpen} = useContext(ProductContext);
  const navigate = useNavigate()

  return (
    <StyledNav>
      <ul className="sections">
        {sections.map((section) => (
          <li key={section} onClick={() => setSiteSection(section)}>{section}</li>
        ))}
      </ul>
      <img src={logo} alt="logo" onClick={()=> navigate("/")} />
      <div className="buttons">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{currency}</button>
        {isMenuOpen && <DropDown />}
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src={cart} alt="carrinho" />
        </button>
        {isCartOpen && <CartModal />}
      </div>
    </StyledNav>
  );
};
