import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    // Contenedor externo con el fondo deseado (bg-gray-400)
    <div className="bg-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Wrapper que añade padding extra top y bottom; para PC se incrementa el padding */}
      <div className="pt-[100px] pb-[100px] md:pt-[100px] md:pb-[100px]">
        <div
          className="about-us-container bg-gray-400 p-10 md:p-20 h-[80vh] md:h-[90vh] flex flex-col md:flex-row items-center justify-center"
        >
          {/* Sección de texto a la izquierda */}
          <div className="max-w-md md:max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ¿Quienes Somos?
            </h2>
            <p className="text-black mt-4 text-base md:text-lg">
              En MaxShoes, no solo vendemos zapatillas: impulsamos tu camino. Desde nuestros inicios, hemos estado comprometidos con la innovación, el confort y el estilo, asegurándonos de que cada paso que des sea una expresión de confianza y autenticidad.
            </p>
            <Link to="/nosotros">
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Conoce más
              </button>
            </Link>
          </div>

          {/* Logo grande a la derecha */}
          <div className="flex justify-center items-center mt-8 md:mt-0 md:ml-10">
            <img
              src="/img/logo.PNG"
              alt="Logo"
              className="w-auto max-h-45 md:max-h-96 lg:max-h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
