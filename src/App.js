import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MainNavigation from "./components/layout/MainNavigation";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddBook from "./pages/AddBook";
import Checkout from "./pages/Checkout";
import PurchaseHistory from "./pages/PurchaseHistory";
import React from 'react';
import InCartContext from "./store/favorites-context";
import "./App.css";

function App() {
  const favoritesCtx = useContext(InCartContext);
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route
          path="/checkout"
          element={<Checkout totalBill={favoritesCtx.totalBill} />}
        />
      </Routes>
    </div>
  );
}

export default App;
