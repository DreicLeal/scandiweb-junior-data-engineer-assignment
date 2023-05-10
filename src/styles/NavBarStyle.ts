import styled from "styled-components";

export const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;

  .sections {
    display: flex;
    gap: 2.5rem;
    font: var(--raleway-400-16);
    li {
      cursor: pointer;
    }
  }
  .buttons {
    display: flex;
    gap: 1rem;
    button {
      font: var(--raleway-500-18);
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
    button:nth-child(2) {
      position: relative;
      top: 3px;
      .quantity {
        top: -10px;
        right: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background-color: var(--black);
        color: var(--white);
        position: absolute;
        p{
          padding-top: 2px;
          font: var(--roboto-700-14);
        }
      }
    }
  }
`;
