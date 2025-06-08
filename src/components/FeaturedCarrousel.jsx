import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import products from "../products"; // Asegúrate de ajustar la ruta a tu archivo de productos
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedCarousel = () => {
  const navigate = useNavigate();

  // Selecciona aleatoriamente 5 productos destacados
  const featuredProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  // Configuración del slider con responsividad solo para cambiar la cantidad de slides, pero las cards mantienen su tamaño fijo.
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Se muestran 3 slides en escritorio
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Mismo número de slides para mantener el tamaño de las cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // En móviles se muestra un slide a la vez para que la card se vea tal cual
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="productos" className="p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Productos Destacados</h2>
      <Slider {...settings}>
        {featuredProducts.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-gray-500 rounded-3xl p-4 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mx-auto"
              />
              <h3
                className="mt-4 text-xl font-bold"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition text-sm"
        >
          Ver todos los productos
        </button>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
