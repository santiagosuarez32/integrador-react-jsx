import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import products from "../data/products";
import CategoryFilter from "./CategoryFilter";

import "@fontsource/oswald"; 
import "@fontsource/oswald/700.css";

const ProductList = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="w-full flex flex-col items-center bg-gray-900 min-h-screen">
      {/* Filtro de Categorías */}
      <CategoryFilter onSelectCategory={setSelectedCategory} />

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl px-12 mb-20 lg:mb-40 bg-gray-900">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-3xl text-center bg-gray-500"
            >
              <LazyLoadImage
                src={product.image}
                alt={product.name}
                effect="blur" // Efecto de carga suave
                className="w-48 mx-auto mb-4 rounded-md"
              />
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {product.name}
              </h3>
              <p className="text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => onAddToCart(product)}
                className="mt-3 bg-blue-600 text-white px-3 py-2 rounded-2xl hover:bg-blue-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Añadir al carrito
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
