import styled from "styled-components";

export const StyledCardHome = styled.div`
padding: 5px;
height: fit-content;
width: fit-content;
display: flex;
flex-direction: column;
img{
    object-fit: cover;
    width: 350px;
    height: 350px;
}
.productCardInfo{
    align-items: flex-start;
    margin-top: 1.5rem;
    gap: .25rem;
    display: flex;
    flex-direction: column;

    p:nth-child(1){
        font: var(--raleway-300-18);
    }
    p:nth-child(2){
        font: var(--raleway-500-18);
    }
}
`