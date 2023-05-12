import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navBar/NavComponent";
import GlobalStyle from "./styles/GlobalStyle";
import { ProductProvider } from "./context/ProductContext";
import TagManager from 'react-gtm-module';
import { AllRoutes } from "./routes";




export const App = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-P63R225',
  };
  TagManager.initialize(tagManagerArgs);
  TagManager.dataLayer({
    dataLayer: {
      event: 'homePageImpression',
      pageName: 'Home'
    },
  });
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
