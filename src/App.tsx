import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navBar/NavComponent";
import GlobalStyle from "./styles/GlobalStyle";
import { ProductProvider } from "./context/ProductContext";
import ReactGA from "react-ga"
import { AllRoutes } from "./routes";

const TRACKING_ID = "UA-181755595-1"
ReactGA.initialize(TRACKING_ID)

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ProductProvider>
          <NavBar />
          <AllRoutes />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};
