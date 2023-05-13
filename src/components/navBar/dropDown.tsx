import { useContext } from "react";
import { StyledDropDown } from "../../styles/DropDownStyle";
import { ProductContext } from "../../context/ProductContext";

export const DropDown = () => {
  const { setCurrency, setIsMenuOpen } = useContext(ProductContext);

  const changeCurrency = (param: string) => {
    setCurrency(param);
    setIsMenuOpen(false);
  };
  return (
    <StyledDropDown>
      <li onClick={() => changeCurrency("$")}>
        <button>$ USD</button>
      </li>
      <li onClick={() => changeCurrency("€")}>
        <button>€ EUR</button>
      </li>
      <li onClick={() => changeCurrency("¥")}>
        <button>¥ JPY</button>
      </li>
    </StyledDropDown>
  );
};
