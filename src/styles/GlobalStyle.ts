import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    input  {
        outline: transparent;
    }
body{
  padding: 0 5rem;
  width: 100vw;
  height: 100vh;
}
.trace{
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--grey2);
  margin: 1rem 0;
}

#root {
  margin: 0 auto;
  /* padding: 0rem 5rem; */
  text-align: center;

  /* Colors */
  --green: #5ECE7B;
  --grey1: #8D8F9A;
  --grey2: #EEEEEE;
  --grey2: #E5E5E5;
  --black: #1D1F22;
  --white: #FFFFFF;
  --opacityGrey: rgba(0, 0, 0, 0.73);

  /* Typograph */
--roboto-cond-700-18: 700 18px "Roboto Condensed";
--roboto-700-18: 700 18px "Roboto";
--roboto-700-14: 700 14px "Roboto";
--roboto-500-16: 500 16px "Roboto";
--roboto-400-16: 400 16px "Roboto";
--raleway-700-32: 700 32px "Raleway";
--raleway-700-24: 700 24px "Raleway";
--raleway-700-16: 700 16px "Raleway";
--raleway-600-30: 600 30px "Raleway";
--raleway-600-14: 600 14px "Raleway";
--raleway-600-16: 600 16px "Raleway";
--raleway-500-18: 500 18px "Raleway";
--raleway-500-16: 500 16px "Raleway";
--raleway-400-30: 400 30px "Raleway";
--raleway-400-24: 400 24px "Raleway";
--raleway-400-42: 400 42px "Raleway";
--raleway-400-14: 400 14px "Raleway";
--raleway-400-16: 400 16px "Raleway";
--raleway-300-16: 300 16px "Raleway";
--raleway-300-18: 300 18px "Raleway";
--source-400-16: 400 16px "Source-Sans-Pro";
--source-400-14: 400 14px "Source-Sans-Pro";
}
`;
