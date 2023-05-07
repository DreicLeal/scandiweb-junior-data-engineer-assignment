import { IButton } from "../interfaces/button";
import { StyledButton } from "../styles/ButtonStyle";

export const Button = ({
  size,
  background,
  hover,
  color,
  border,
  onClick,
  text,
}: IButton) => {
  return (
    <StyledButton
      size={size}
      background={background}
      hover={hover}
      color={color}
      border={border}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};
