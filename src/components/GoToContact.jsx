import React from "react";
import { useNavigate } from "react-router-dom";

const GoToContact = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center p-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="bg-blue-600 text-white rounded-2xl shadow-lg px-8 py-6 w-full max-w-md text-center transition transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-3">¿Necesitas ayuda?</h2>
        <p className="text-sm mb-4">Contáctanos y resolveremos tus dudas.</p>
        <button
          onClick={() => navigate("/contacto")}
          className="bg-white text-blue-600 font-bold px-5 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Ir a Contacto
        </button>
      </div>
    </div>
  );
};

export default GoToContact;
