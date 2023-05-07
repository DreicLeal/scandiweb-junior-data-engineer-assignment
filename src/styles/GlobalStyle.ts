import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  /* Colors */
  --green: #5ECE7B;
  --grey1: #8D8F9A;
  --grey2: #EEEEEE;
  --black: #1D1F22;
  --white: #FFFFFF;

  /* Typograph */
--roboto-cond-700-18: 700 18px "Roboto-Condensed";
--roboto-700-18: 700 18px "Roboto";
--roboto-500-16: 500 16px "Roboto";
--roboto-400-16: 400 16px "Roboto";
--raleway-700-24: 700 24px "Raleway";
--raleway-700-16: 700 16px "Raleway";
--raleway-600-30: 600 30px "Raleway";
--raleway-600-14: 600 14px "Raleway";
--raleway-500-16: 500 16px "Raleway";
--raleway-400-30: 400 30px "Raleway";
--raleway-400-24: 400 24px "Raleway";
--raleway-400-14: 400 14px "Raleway";
--raleway-300-16: 300 16px "Raleway";
--source-400-16: 400 16px "Source-Sans-Pro";
--source-400-14: 400 14px "Source-Sans-Pro";
}
`;
