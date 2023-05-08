import styled from "styled-components";

export const StyledCardHome = styled.div`
  padding: 0.5rem;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 350px;
    height: 350px;
  }
  .addCart {
    opacity: 0;
    position: absolute;
    right: 10%;
    bottom: 12%;
    width: 52px;
    height: 52px;
    cursor: pointer;
  }
  .productCardInfo {
    align-items: flex-start;
    margin-top: 1.5rem;
    gap: 0.25rem;
    display: flex;
    flex-direction: column;

    p:nth-child(1) {
      font: var(--raleway-300-18);
    }
    p:nth-child(2) {
      font: var(--raleway-500-18);
    }
  }
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    transform: scale(1.01);
    .addCart {
      opacity: 1;
    }
  }
`;
