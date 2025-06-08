import React from "react";
import { useNavigate } from "react-router-dom";

const GoToContact = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center py-12 bg-gray-700 text-white rounded-lg shadow-lg max-w-4xl mx-auto my-10 px-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-2xl sm:text-3xl font-bold">¡Contactate con nosotros!</h2>
      <p className="mt-3 text-sm sm:text-base">
        ¿Tienes alguna duda o consulta? Estamos aquí para ayudarte.
      </p>
      <button
        onClick={() => navigate("/contacto")}
        className="mt-5 bg-white text-blue-700 font-bold py-2 px-6 rounded-2xl hover:bg-gray-200 transition text-lg"
      >
        Contactanos
      </button>
    </section>
  );
};

export default GoToContact;
