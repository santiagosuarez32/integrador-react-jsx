import React from "react";
import { useNavigate } from "react-router-dom";


const Nosotros = () => {
  const navigate = useNavigate();

  // Selecciona 3 productos aleatoriamente


  return (
    <section
      className="min-h-screen relative py-10 px-4"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to bottom, #560e68fb, #832c2c)",
      }}
    >
      {/* Botón "Volver" en la esquina superior izquierda (ajustado responsivamente) */}
      <button
        onClick={() => navigate(-1)}
        className="font-bold absolute top-2 left-2 sm:top-4 sm:left-4 bg-white border border-gray-300 text-gray-700 px-3 py-1 sm:px-4 sm:py-2 rounded shadow hover:bg-gray-100 transition"
      >
        Volver
      </button>

      {/* Contenedor central para la caja blanca */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center">
            {/* Contenedor de texto */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
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

            {/* Contenedor de imagen */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src="/img/logo.PNG"
                alt="Nuestro Equipo"
                className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
