import styled from "styled-components";

export const StyledCartModalItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
  transition: 2s;
  .infoContainer {
    display: flex;
    flex-direction: column;
    text-align: justify;
    justify-content: space-between;
  }

  h3 {
    font: var(--raleway-300-16);
  }
  .price {
    font: var(--raleway-500-16);
  }

  .sizeContainer > p,
  .colorContainer > p {
    margin-bottom: 5px;
    font: var(--raleway-400-14);
  }
  .colorContainer {
    ul {
      display: flex;
      gap: 5px;
    }
    li {
      width: 32px;
      height: 32px;
      border: 1px solid var(--grey1);
      transition: 0.3s;
      &:hover {
        border: 1px solid var(--green);
        cursor: pointer;
      }
    }
  }
  #pickedColor {
    border: 1px solid var(--green);
  }
  .white {
    background-color: white;
  }
  .black {
    background-color: black;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }

  .sizeContainer > div {
    display: flex;
    gap: 5px;
  }
  .imgContainer {
    display: flex;
    gap: 0.5rem;
    .quantity {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font: var(--raleway-500-16);
      }
    }
    img {
      object-fit: cover;
      width: 121px;
      height: 190px;
    }
  }
`;
