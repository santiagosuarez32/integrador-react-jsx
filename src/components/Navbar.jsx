import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Se importa useNavigate
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Navbar = ({
  cartOpen,
  setCartOpen,
  cartItems,
  onIncrement,
  onDecrement,
  onClearCart,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handler para el ícono del carrito
  const handleCartClick = (e) => {
    e.stopPropagation();
    if (menuOpen) {
      setMenuOpen(false);
    }
    setCartOpen((prev) => !prev);
  };

  // Handler para el menú hamburguesa
  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  // Nuevo handler para el enlace "Productos"
  const handleProductosClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (window.location.pathname !== "/") {
      // Si no estamos en la home, navegamos a ella...
      navigate("/");
      // ... y esperamos un momento para luego hacer scroll
      setTimeout(() => {
        const prodElement = document.getElementById("productos");
        if (prodElement) {
          prodElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Si ya estás en la home, simplemente hace scroll
      const prodElement = document.getElementById("productos");
      if (prodElement) {
        prodElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm text-white flex items-center justify-between px-6 py-4 z-50">
      {/* Logo */}
      <div className="text-md font-bold">
        <img
          src="/img/logo.PNG"
          alt="MaxShoes Logo"
          className="max-w-20 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>

      {/* Menú principal */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-900 rounded-xl backdrop-blur-sm transition-transform duration-250 ease-in-out ${
          menuOpen ? "translate-y-7" : "-translate-y-full"
        } md:relative md:top-auto md:w-auto md:bg-transparent md:translate-y-0 md:flex md:justify-center p-5`}
      >
        <ul
          className="flex flex-col md:flex-row md:space-x-6 text-center lg:translate-x-[-30px] md:translate-x-0 md:translate-y-0"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <li>
            <a
              href="#"
              className="block py-2 hover:text-gray-600"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 hover:text-gray-600"
              onClick={handleProductosClick}
            >
              Productos
            </a>
          </li>
          <li>
  <a
    href="#"
    className="block py-2 hover:text-gray-600"
    onClick={(e) => {
      e.preventDefault();
      navigate("/nosotros"); // Cambia la ruta a "contacto"
      setMenuOpen(false);
    }}
  >
    Nosotros
  </a>
</li>

          <li>
            <a
              href="#"
              className="block py-2 hover:text-gray-600"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contacto");
                setMenuOpen(false);
              }}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Ícono de carrito y botón hamburguesa */}
      <div className="flex items-center space-x-4">
        <FaShoppingCart
          className="text-2xl cursor-pointer"
          onClick={handleCartClick}
        />
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={handleMenuClick}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Componente Cart integrado en el Navbar */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onClearCart={onClearCart}
      />
    </nav>
  );
};

export default Navbar;
