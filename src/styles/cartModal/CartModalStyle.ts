import styled from "styled-components";

export const StyledCartModal = styled.div`
  backdrop-filter: blur(2px);
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;
  background-color: rgba(57, 55, 72, 0.22);

  .cartContainer {
    overflow-y: auto;
    width: fit-content;
    height: fit-content;
    width: 328px;
    min-height: 350px;
    max-height: 550px;
    padding: 1rem;
    background-color: var(--white);
    position: absolute;
    right: 5%;
    animation: appear 1s;
    @keyframes appear {
      0% {
        opacity: 0;
        right: -5%;
      }
      100% {
        opacity: 1;
      }
    }
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--grey);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--green);
      border-radius: 20px;
      border: 2px solid transparent;
    }
    h2 {
      margin-bottom: 2rem;
      text-align: justify;
      font: var(--raleway-700-16);
      span {
        font: var(--raleway-500-16);
      }
    }

    .total {
      display: flex;
      justify-content: space-between;
      margin: 1.5rem 0;
      p:nth-child(1) {
        font: var(--roboto-500-16);
      }
      p:nth-child(2) {
        font: var(--raleway-700-16);
      }
    }
    .buttons {
      display: flex;
      gap: 1rem;
      button {
        font: var(--raleway-600-14);
      }
    }
  }
`;
