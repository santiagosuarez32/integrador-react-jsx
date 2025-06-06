import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Modal from "./components/Modal";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList />
      <Offer />
    </div>
  );
}

export default App;
