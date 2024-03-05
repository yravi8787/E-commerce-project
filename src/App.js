import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductPage from "./pages/Products/ProductPage";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
