import styled, { css } from "styled-components";
import { IButton } from "../interfaces/button";

const hoverType: any = {
  hover1: {
    background: "var(--black)",
  },
  hover2: {
    background: "var(--grey2)",
  },
  hover3: {
    border: "1px solid var(--green)",
  },
};

export const StyledButton: any = styled.button`
  transition: 0.5s;

  ${({ background }: IButton) => {
    return css`
      background-color: var(--${background});
    `;
  }}
  ${({ hover }: IButton) => {
    return css`
      &:hover {
        ${hoverType[`${hover}`]}
      }
    `;
  }}

  ${({ border }) => {
    if (border) {
      return css`
        border: ${border};
      `;
    }
  }}

  ${({ color }) => {
    if (color) {
      return css`
        color: var(--${color});
      `;
    }
  }}

  ${({ size }: IButton) => {
    switch (size) {
      case "1":
      return css`
        width:140px;
        height:43px;
      `;
      case "2":
      return css`
        width:279px;
        height:43px;
      `;
      case "3":
      return css`
        width:63px;
        height:45px;
      `;
      case "4":
      return css`
        width:45px;
        height:45px;
      `;
      case "5":
      return css`
        width:32px;
        height:32px;
      `;
      case "6":
      return css`
        width:24px;
        height:24px;
      `;
      case "7":
      return css`
        width:16px;
        height:16px;
      `;
    }
  }}
`;
