import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import Nosotros from "./components/Nosotros"; // Componente que muestra toda la información de "Nosotros"
import Footer from "./components/Footer";

function App() {
  // Estado global del carrito
  const [cartItems, setCartItems] = useState([]);
  // Booleano para controlar la apertura del carrito (se activa al presionar el ícono en el Navbar)
  const [cartOpen, setCartOpen] = useState(false);
  // Estado para el mensaje tipo toast
  const [toast, setToast] = useState("");

  // Función para agregar producto al carrito. Si ya existe, incrementa la cantidad.
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    // Mostrar toast
    setToast("Producto añadido al carrito con éxito");
    setTimeout(() => setToast(""), 2500);
  };

  // Funciones para modificar cantidades
  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleClearCart = () => setCartItems([]);

  // Esta es la estructura de la página principal
  const Home = () => (
    <>
      {/* Toast de confirmación */}
      {toast && (
        <>
          <style jsx="true">{`
            @keyframes slideUpFade {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-slideUpFade {
              animation: slideUpFade 0.5s ease-out;
            }
          `}</style>
          <div className="fixed bottom-5 right-5 bg-green-800 text-white px-4 py-2 rounded shadow z-[100] animate-slideUpFade">
            {toast}
          </div>
        </>
      )}

      {/* Se pasan cartItems y las funciones al Navbar */}
      <Navbar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onClearCart={handleClearCart}
      />
      <Hero />
      {/* Se pasa la función de añadir producto desde ProductList */}
      <ProductList onAddToCart={handleAddToCart} />
      <AboutUs />
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
