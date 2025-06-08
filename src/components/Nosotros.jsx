import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // Se importa el Footer

const Nosotros = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to bottom, #560e68fb, #832c2c)",
      }}
    >
      {/* Botón "Volver" en la esquina superior izquierda */}
      <button
  onClick={() => navigate("/")}
  className="bg-gray-200 text-black font-bold text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-2xl hover:bg-gray-300 transition absolute top-2 left-2 sm:top-4 sm:left-4 z-50"
>
  Volver
</button>


      {/* Contenedor central ajustado para móvil */}
      <div className="flex items-center justify-center flex-grow px-4 sm:px-8">
        <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center">
            {/* Contenedor de texto */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-700 mb-4">
                Acerca de Nosotros
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Cada paso es poder. Fundamos nuestra empresa en Córdoba con la
                visión de transformar cada pisada en una declaración de estilo.
                Con innovación y pasión, nuestros zapatos te impulsan a
                conquistar el mundo.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Estamos comprometidos con productos excepcionales y materiales
                de primera.
              </p>
            </div>

            {/* Contenedor de imagen con ajuste responsivo */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src="/img/logo.PNG"
                alt="Nuestro Equipo"
                className="w-40 sm:w-full max-w-xs sm:max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer siempre en el fondo */}
      <Footer />
    </div>
  );
};

export default Nosotros;
