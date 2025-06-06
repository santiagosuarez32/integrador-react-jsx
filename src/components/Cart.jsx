import React from "react";

const Cart = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed top-0 right-0 h-full w-80 bg-black text-white p-5 shadow-lg ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Carrito de Compras</h2>
        <button className="text-2xl" onClick={onClose}>
          ✖
        </button>
      </div>

      {/* Lista de productos */}
      <div className="mt-5">
        <p>Tu carrito está vacío</p>
      </div>

      {/* Botón de checkout */}
      <button className="w-full mt-5 py-2 bg-green-500 text-white font-bold rounded-lg">
        Finalizar compra
      </button>
    </div>
  );
};

export default Cart;
