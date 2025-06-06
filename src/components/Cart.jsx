import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

const Cart = ({
  isOpen,
  onClose,
  cartItems = [],
  onIncrement,
  onDecrement,
  onClearCart,
}) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return ReactDOM.createPortal(
    <>
      {/* Overlay para desenfocar el fondo */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-[60]`}
        onClick={onClose}
      ></div>

      {/* Panel del carrito */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-gray-800 shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-[70]`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Carrito</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaTimes />
            </button>
          </div>
          {/* Lista de productos */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length > 0 ? (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="border-b pb-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-white">{item.name}</p>
                      <div className="flex items-center">
                        <button
                          onClick={() => onDecrement(item.id)}
                          className="text-white px-2"
                        >
                          –
                        </button>
                        <span className="text-white">{item.quantity}</span>
                        <button
                          onClick={() => onIncrement(item.id)}
                          className="text-white px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">
                      Precio: {item.price.toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">No hay productos en el carrito</p>
            )}
          </div>
          {/* Total y acciones */}
          <div className="mt-4 border-t pt-4">
            <p className="text-lg font-semibold text-white">
              Total: {totalPrice.toFixed(2)}
            </p>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Comprar
              </button>
              <button
                onClick={onClearCart}
                className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Cart;
