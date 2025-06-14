import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-gray-800 text-white py-4 text-center">
      <p className="text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>&copy; {new Date().getFullYear()} MaxShoes. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
