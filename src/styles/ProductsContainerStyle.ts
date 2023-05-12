import styled from "styled-components";

export const StyledProductsContainer = styled.div`
height: fit-content;
margin-top: 3rem;
h2{
    text-align: start;
    margin-bottom: 80px;
    font: var(--raleway-400-42);
    animation: slidein 1s;
}

@keyframes slidein {
    0%{
        transform: translateY(-30%);
        opacity: 0;
    }
    100%{

        transform: translateY(0%);
        opacity: 1;
    }
}
ul{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-between;
}
`