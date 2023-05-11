import styled from "styled-components";

export const StyledCart = styled.div`
  h2 {
    margin: 50px 0;
    text-align: left;
    font: var(--raleway-700-32);
  }
  .cartItems{
    overflow-y: auto;
    max-height: 720px;
  }
  .summary {
    margin: 2rem 0 .5rem 0;
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 0.5rem;
    .flex {
      display: flex;
      width: fit-content;
      gap: 10px;
      justify-content: space-between;
    }
    .title {
      font: var(--raleway-400-24);
    }
    .info {
      font: var(--raleway-700-24);
    }
  }
`;
