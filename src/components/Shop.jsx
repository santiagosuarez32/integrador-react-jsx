import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Shop = () => {
  // Estado para los productos en el carrito; cada item tendrá: id, name, price, quantity
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  // Función para agregar producto al carrito
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

    // Mostrar overlay o "toast" de confirmación
    setToast("Producto añadido al carrito");
    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  // Funciones para aumentar o disminuir la cantidad en el carrito
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

  return (
    <div>
      {/* Toast overlay */}
      {toast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow z-[100]">
          {toast}
        </div>
      )}

      {/* Lista de productos */}
      <ProductList onAddToCart={handleAddToCart} />

      {/* Componente del carrito */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onClearCart={handleClearCart}
      />

      {/* Botón para abrir el carrito */}
      <button
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full z-[101]"
        onClick={() => setCartOpen(true)}
      >
        Abrir Carrito
      </button>
    </div>
  );
};

export default Shop;
