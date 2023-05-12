import styled from "styled-components";

export const StyledCartItem = styled.li`
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
    height: 195px;
  }
  .cartPage {
    height: 288px;
  }

  .brandModal, .nameModal {
    font: var(--raleway-300-16);
  }
  .brandCart {
    font: var(--raleway-600-30);
  }
  .nameCart {
    font: var(--raleway-400-30);
  }
  .price {
    font: var(--raleway-500-16);
  }
  #pickedSize {
    background-color: var(--black);
    color: var(--white);
  }
  .subtitlesCartModal{
    margin-bottom: 5px;
    font: var(--raleway-400-14);
  }
  .subtitlesCartPage{
    margin-bottom: 5px;
    font: var(--roboto-cond-700-18);
  }
  .colorContainer {
    ul {
      display: flex;
      justify-content: flex-start;
      gap: 0.5rem;
    }
    .cartModalSquare {
      width: 20px;
      height: 20px;
    }
    li {
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
  .cartColorSquare {
    width: 32px;
    height: 32px;
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
  .grey {
    background-color: grey;
  }
  .blue {
    background-color: blue;
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
    .imgCarrousselContainer {
      position: relative;
      .imgButtons {
        position: absolute;
        display: flex;
        gap: 5px;
        z-index: 5;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
      .currentImg {
        object-fit: cover;
        width: 121px;
        height: 100%;
      }
      .cartPageImg {
        width: 200px;
      }
    }
  }
`;
