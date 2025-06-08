import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaTimes, FaTrash } from "react-icons/fa";

const Cart = ({
  isOpen,
  onClose,
  cartItems = [],
  onIncrement,
  onDecrement,
  onClearCart,
  onClearToast, // función para limpiar el toast de "producto añadido"
  onRemoveItem // función para remover un producto individual
}) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [clearCartModal, setClearCartModal] = useState(false);

  // Si el carrito se cierra, reseteamos los modales.
  useEffect(() => {
    if (!isOpen) {
      setConfirmModal(false);
      setDeleteModal(false);
      setClearCartModal(false);
    }
  }, [isOpen]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleComprar = () => {
    if (cartItems.length > 0) {
      if (typeof onClearToast === "function") {
        onClearToast();
      }
      setConfirmModal(true);
    }
  };

  const handleConfirm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.href = "/";
    }, 300);
  };

  // Ahora usamos handleCancel en el botón "Cancelar"
  const handleCancel = () => {
    setConfirmModal(false);
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      if (typeof onRemoveItem === "function") {
        onRemoveItem(itemToDelete.id);
      } else {
        console.error("Debes pasar la función onRemoveItem para eliminar productos");
      }
    }
    setDeleteModal(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteModal(false);
    setItemToDelete(null);
  };

  const handleClearCartClick = () => {
    if (typeof onClearToast === "function") {
      onClearToast();
    }
    setClearCartModal(true);
  };

  const confirmClearCart = () => {
    onClearCart();
    setClearCartModal(false);
  };

  const cancelClearCart = () => {
    setClearCartModal(false);
  };

  return ReactDOM.createPortal(
    <>
      {/* Overlay del carrito */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } z-[60]`}
        onClick={onClose}
      ></div>

      {/* Panel del carrito (responsive sin scroll horizontal) */}
      <div
        className={`fixed top-20 left-0 sm:left-auto sm:right-0 rounded-xl h-screen max-h-[80vh] w-full sm:w-80 overflow-x-hidden bg-gray-800 shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-full"
        } z-[70]`}
      >
        <div
          className="flex flex-col h-full p-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Carrito</h2>
            <button onClick={onClose} className="text-white hover:text-gray-300 text-2xl">
              <FaTimes />
            </button>
          </div>
          {/* Lista de productos */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length > 0 ? (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="border-b pb-2 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p
                        className="font-medium text-white"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                      >
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-300">Precio: {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          if (item.quantity === 1) {
                            handleDeleteClick(item);
                          } else {
                            onDecrement(item.id);
                          }
                        }}
                        className="bg-black hover:bg-red-700 text-white px-2 py-1 rounded-lg"
                      >
                        –
                      </button>
                      <span className="text-white mx-1">{item.quantity}</span>
                      <button
                        onClick={() => onIncrement(item.id)}
                        className="bg-black hover:bg-red-700 text-white px-2 py-1 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleDeleteClick(item)}
                      className="bg-red-500 text-white px-2 py-1 rounded-lg"
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">No hay productos en el carrito</p>
            )}
          </div>
          {/* Total y acciones */}
          <div className="mt-4 border-t pt-4">
            <p className="text-lg font-semibold text-white">Total: {totalPrice.toFixed(2)}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={handleComprar}
                disabled={cartItems.length === 0}
                className={`flex-1 bg-blue-600 text-white py-2 rounded-md transition-colors ${
                  cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                Comprar
              </button>
              <button
                onClick={cartItems.length > 0 ? handleClearCartClick : undefined}
                disabled={cartItems.length === 0}
                className={`flex-1 py-2 rounded-md transition-colors ${
                  cartItems.length === 0
                    ? "bg-red-600 opacity-50 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Confirmación de Compra */}
      {confirmModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[80]">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-2xl shadow-lg z-[90]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <h3 className="text-xl font-semibold mb-4">Confirmar compra</h3>
            <p className="mb-4">¿Estás seguro de confirmar la compra?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleConfirm();
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmación para borrar un producto */}
      {deleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[85]">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-2xl shadow-lg z-[95]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <h3 className="text-xl font-semibold mb-4">Eliminar Producto</h3>
            <p className="mb-4">¿Quieres borrar el producto del carrito?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  confirmDelete();
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmación para vaciar el carrito */}
      {clearCartModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[999]">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-2xl shadow-lg z-[1000]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <h3 className="text-xl font-semibold mb-4">Vaciar Carrito</h3>
            <p className="mb-4">¿Quieres borrar los productos del carrito?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={cancelClearCart}
                className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  confirmClearCart();
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Sí, borrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Cart;
