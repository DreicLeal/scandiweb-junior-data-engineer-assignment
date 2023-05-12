import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductDetails } from "../pages/ProductDetails";
import { Cart } from "../pages/Cart";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
