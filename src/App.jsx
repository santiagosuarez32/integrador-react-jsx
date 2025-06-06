import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Modal from "./components/Modal";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList />
      <AboutUs />
      <Footer />
 
    </div>
  );
}

export default App;
