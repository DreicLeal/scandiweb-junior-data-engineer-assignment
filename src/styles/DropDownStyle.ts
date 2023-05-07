import styled from "styled-components";

export const StyledDropDown = styled.ul`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 57px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.18);
  
  li {
    padding: 1rem 1.5rem;
    transition: 0.5s;
    &:hover {
      background-color: var(--grey2);
    }
  }
`;
