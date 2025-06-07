import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div
      className="about-us-container bg-gray-400 p-10 shadow-lg h-[80vh] flex flex-col md:flex-row items-center justify-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Sección de texto a la izquierda */}
      <div className="max-w-md">
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ¿Quienes Somos?
        </h2>
        <p className="text-black mt-4">
          En MaxShoes, no solo vendemos zapatillas: impulsamos tu camino. Desde
          nuestros inicios, hemos estado comprometidos con la innovación, el
          confort y el estilo, asegurándonos de que cada paso que des sea una
          expresión de confianza y autenticidad.
        </p>
        <Link to="/nosotros">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Conoce más
          </button>
        </Link>
      </div>

      {/* Logo grande a la derecha */}
      <div className="flex justify-center items-center">
        <img
          src="/img/logo.PNG"
          alt="Logo"
          className="w-auto max-h-45 lg:max-h-80"
        />
      </div>
    </div>
  );
};

export default AboutUs;
