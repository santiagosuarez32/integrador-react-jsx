import React from "react";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md text-center">
        <h2 className="text-xl font-bold">¡Oferta Especial!</h2>
        <p>Obtén un regalo GRATIS y un cupón de $10 al registrarte hoy.</p>
        <button className="mt-4 px-3 py-1 bg-red-500 text-white rounded outline-none" 
                onClick={(e) => { e.currentTarget.blur(); closeModal(); }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
