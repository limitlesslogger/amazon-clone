import React from "react";
import "./App.css";
import Header from './Header';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
        {/* <Route path="/checkout" element=
        {
            <>
              <h1>Happy Hacking!</h1>
              <CheckoutComponent /> 
            </>
        }
          <Route path="/" element={<Home />}  /> */}
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
