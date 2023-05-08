import styled from "styled-components";

export const StyledDropDown = styled.ul`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 57px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  
  li {
    padding: 1rem 1.5rem;
    transition: 0.5s;
    &:hover {
      background-color: var(--grey2);
    }
  }
`;
