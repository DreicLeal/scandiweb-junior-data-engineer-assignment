import styled from "styled-components";

export const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem 0 8rem;
  width: 100vw;
  height: 78px;

  .sections {
    display: flex;
    gap: 2.5rem;
    font: var(--raleway-400-16);
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
  }
`;
