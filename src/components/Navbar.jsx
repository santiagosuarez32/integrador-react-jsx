import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart"; // Importamos el componente del carrito

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // Estado para controlar el carrito

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm text-white flex items-center justify-between px-6 py-4 z-50">
      {/* Logo alineado a la izquierda */}
      <div className="text-md font-bold">
        <img src="/img/logo.PNG" alt="MaxShoes Logo" className="max-w-20" />
      </div>

      {/* Menú principal con transparencia y blur más ligero */}
      <div className={`absolute top-16 left-0 w-full bg-gray-900 rounded-xl backdrop-blur-sm transition-transform duration-250 ease-in-out ${menuOpen ? "translate-y-7" : "-translate-y-full"} md:relative md:top-auto md:w-auto md:bg-transparent md:translate-y-0 md:flex md:justify-center p-5`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center lg:translate-x-[-30px] md:translate-x-0 md:translate-y-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li><a href="#" className="block py-2 hover:text-gray-600">Inicio</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-600">Productos</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-600">Nosotros</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-600">Contacto</a></li>
        </ul>
      </div>

      {/* Icono de carrito y botón hamburguesa */}
      <div className="flex items-center space-x-4">
        <FaShoppingCart 
          className="text-2xl cursor-pointer" 
          id="cart" 
          onClick={() => setCartOpen(true)} // Al hacer clic, se abre el carrito
        />
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Componente del carrito */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
