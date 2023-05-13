import { useContext } from "react";
import { StyledNav } from "../../styles/NavBarStyle";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { DropDown } from "./dropDown";

export const NavBar = () => {
  const sections = ["WOMEN", "MEN", "KIDS"];

  const {
    setSiteSection,
    siteSection,
    currency,
    isMenuOpen,
    setIsMenuOpen,
    cartQuantity,
    setIsCartOpen,
    isCartOpen,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  const menu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };
  const cartModal = () => {
    setIsMenuOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <StyledNav>
      <ul className="sections">
        {sections.map((section) => (
          <li
            key={section}
            id={section === siteSection ? "currentSection" : ""}
            onClick={() => setSiteSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <div className="buttons">
        <button onClick={() => menu()}>{currency}</button>
        {isMenuOpen && <DropDown />}
        <button onClick={() => cartModal()}>
          {cartQuantity > 0 && (
            <div className="quantity">
              <p>{cartQuantity}</p>
            </div>
          )}
          <img src={cartIcon} alt="carrinho" />
        </button>
      </div>
    </StyledNav>
  );
};
