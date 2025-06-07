import React from "react";
import { useNavigate } from "react-router-dom";

const Nosotros = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen relative py-10 px-4"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to bottom, #560e68fb, #832c2c)",
      }}
    >
      {/* Botón "Volver" en la esquina superior izquierda */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
      >
        Volver
      </button>

      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Acerca de Nosotros
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            En MaxShoes, estamos comprometidos con la innovación, la calidad y el
            confort. Nuestra pasión es ofrecer calzado y accesorios modernos que
            empoderen tu estilo y te acompañen en cada paso de tu camino.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Desde nuestros inicios, hemos trabajado incansablemente para fusionar
            diseño vanguardista con materiales de la mejor calidad. Nuestro equipo
            se esfuerza por garantizar que cada producto cumpla con los más altos
            estándares de excelencia.
          </p>
          <div className="flex justify-center">
            <img
              src="/img/logo.PNG"
              alt="Nuestro Equipo"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
