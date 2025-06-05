import React, { useState } from "react";
import products from "../data/products"; // Importamos el array de productos
import CategoryFilter from "./CategoryFilter";

import "@fontsource/oswald"; // Fuente base
import "@fontsource/oswald/700.css"; // Peso específico


const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filtramos los productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Filtro de Categorías */}
      <CategoryFilter onSelectCategory={setSelectedCategory} />

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl px-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg text-center bg-gray-400" >
              <img src={product.image} alt={product.name} className="w-32 mx-auto mb-4 rounded-md" />
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{product.name}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Añadir al carrito
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
