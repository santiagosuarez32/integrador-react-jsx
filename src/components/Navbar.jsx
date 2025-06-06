import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm text-white flex items-center justify-between px-6 py-4 z-50">
      {/* Logo alineado a la izquierda */}
      <div className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>MaxShoes</div>

      {/* Menú principal con transparencia y blur más ligero */}
      <div className={`absolute top-16 left-0 w-full bg-white bg-opacity-10 backdrop-blur-sm transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:relative md:top-auto md:w-auto md:bg-transparent md:translate-y-0 md:flex md:justify-center`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center lg:translate-x-[-30px] md:translate-x-0 md:translate-y-0 " style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li><a href="#" className="block py-2 hover:text-gray-600">Inicio</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-600">Productos</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-600">Nosotros</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-600">Contacto</a></li>
        </ul>
      </div>

      {/* Icono de carrito y botón hamburguesa */}
      <div className="flex items-center space-x-4">
        <FaShoppingCart className="text-2xl cursor-pointer" />
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
