import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navBar/NavComponent";
import GlobalStyle from "./styles/GlobalStyle";
import { ProductProvider } from "./context/ProductContext";
import { AllRoutes } from "./routes";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <BrowserRouter>
        <ProductProvider>
          <AllRoutes />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};
