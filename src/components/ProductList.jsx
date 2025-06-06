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
    <div className="w-full flex flex-col items-center  bg-gray-900">
      {/* Filtro de Categorías */}
      <CategoryFilter onSelectCategory={setSelectedCategory} />

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl px-12 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="  p-4 rounded-3xl text-center bg-gray-500" >
              <img src={product.image} alt={product.name} className="w-48 mx-auto mb-4 rounded-md" />
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{product.name}</h3>
              <p className="text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>${product.price.toFixed(2)}</p>
              <button className="mt-3 bg-blue-600 text-white px-3 py-2 rounded-2xl hover:bg-blue-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
