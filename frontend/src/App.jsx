import React from "react";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Cartpage from "./pages/CartPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/signin" element={<Loginpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/product-details" element={<ProductDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
