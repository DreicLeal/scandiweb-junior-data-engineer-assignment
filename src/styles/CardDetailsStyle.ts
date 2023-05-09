import styled from "styled-components";

export const StyledCardDetail = styled.div`
display: flex;
  .imgsContainer {
    display: flex;
    gap: 1.5rem;
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        img {
          max-width: 88px;
          max-height: 88px;
        }
      }
    }
  }
  .sizeContainer{
    ul{
      display: flex;
      gap: .5rem;
      width: fit-content;
      li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 63px;
        height: 45px;
        border:1px solid var(--black);
        transition: .3s;
        &:hover{
          background-color: var(--black);
          color: var(--white);
          cursor: pointer;
        }
      }
      #pickedSize{
        background-color: var(--black);
        color: var(--white);
      }
    }
  }
  .colorContainer{
    ul{
      display: flex;
      gap: .5rem;
      width: fit-content;
      li{
        width: 32px;
        height: 32px;
        border: 1px solid transparent;
        transition: .3s;
        &:hover{
          border: 1px solid var(--green);
          cursor: pointer;
        }
      }
      #pickedColor{
        border: 1px solid var(--green);
      }
    }
  }
`;
