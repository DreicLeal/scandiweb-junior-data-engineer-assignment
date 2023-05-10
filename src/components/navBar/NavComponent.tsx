import { useContext, useState } from "react";
import { DropDown } from "./DropDown";
import { CartModal } from "./CartModal";
import { StyledNav } from "../../styles/NavBarStyle";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const sections = ["WOMEN", "MEN", "KIDS"];

  const { setSiteSection, currency, isMenuOpen, setIsMenuOpen, cart} = useContext(ProductContext);
  const navigate = useNavigate()

  const menu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsCartOpen(false)
  }
  const cartModal = () => {
    setIsMenuOpen(false)
    setIsCartOpen(!isCartOpen)
  }
  return (
    <StyledNav>
      <ul className="sections">
        {sections.map((section) => (
          <li key={section} onClick={() => setSiteSection(section)}>{section}</li>
        ))}
      </ul>
      <img src={logo} alt="logo" onClick={()=> navigate("/")} />
      <div className="buttons">
        <button onClick={() => menu()}>{currency}</button>
        {isMenuOpen && <DropDown />}
        <button onClick={() => cartModal()}>
          {cart.length > 0 && <div>{ cart.length}</div>}
          <img src={cartIcon} alt="carrinho" />
        </button>
        {isCartOpen && <CartModal />}
      </div>
    </StyledNav>
  );
};
