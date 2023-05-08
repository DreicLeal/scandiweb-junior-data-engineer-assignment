import styled from "styled-components";

export const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 5rem 0 8rem; */
  height: 78px;
  margin-bottom: 80px;

  .sections {
    display: flex;
    gap: 2.5rem;
    font: var(--raleway-400-16);
    li{
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
  }
`;
