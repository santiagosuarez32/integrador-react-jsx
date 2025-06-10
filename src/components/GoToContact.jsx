import React from "react";
import { useNavigate } from "react-router-dom";

const GoToContact = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg px-8 py-6 w-full max-w-sm text-center transition transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-3 text-indigo-600">¿Necesitas ayuda?</h2>
        <p className="text-sm mb-4 text-gray-600">Contáctanos y resolveremos tus dudas.</p>
        <button
          onClick={() => navigate("/contacto")}
          className="bg-indigo-600 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          Ir a Contacto
        </button>
      </div>
    </div>
  );
};

export default GoToContact;
