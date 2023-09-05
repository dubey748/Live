import React from "react";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/signin" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
