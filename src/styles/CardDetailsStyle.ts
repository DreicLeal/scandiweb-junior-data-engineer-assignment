import styled from "styled-components";

export const StyledCardDetail = styled.div`
  display: flex;
  gap: 5rem;
  h3 {
    font: var(--raleway-600-30);
  }
  p {
    font: var(--roboto-cond-700-18);
  }
  .imgsContainer {
    display: flex;
    gap: 1.5rem;
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        cursor: pointer;
        img {
          max-width: 88px;
          max-height: 88px;
        }
      }
    }
    .mainImage {
      width: 450px;
      height: 420px;
    }
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    .sizeContainer {
      ul {
        display: flex;
        gap: 0.5rem;
        width: fit-content;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 63px;
          height: 45px;
          border: 1px solid var(--black);
          transition: 0.3s;
          &:hover {
            background-color: var(--black);
            color: var(--white);
            cursor: pointer;
          }
        }
        #pickedSize {
          background-color: var(--black);
          color: var(--white);
        }
      }
    }
    .colorContainer {
      ul {
        display: flex;
        gap: 0.5rem;
        width: fit-content;
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
        .grey {
          background-color: grey;
        }
        .blue {
          background-color: blue;
        }
        .brown {
          background-color: brown;
        }
        .yellow {
          background-color: yellow;
        }
      }
    }
    .price {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      p:nth-child(2) {
        font: var(--raleway-700-24);
      }
    }
    button {
      margin-bottom: 2rem;
    }
  }
`;
