import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "./data/products"; // Asegúrate de que esta ruta sea correcta
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import Nosotros from "./components/Nosotros"; // Componente que muestra toda la información de "Nosotros"
import Footer from "./components/Footer";
import Cart from "./components/Cart"; // Se importa el componente Cart (ya modificado para usar un modal de confirmación al vaciar)
import Contacto from "./components/Contacto";
import GoToContact from "./components/GoToContact";

function App() {
  // Estado global del carrito
  const [cartItems, setCartItems] = useState([]);
  // Booleano para controlar la apertura del carrito (se activa al presionar el ícono en el Navbar)
  const [cartOpen, setCartOpen] = useState(false);
  // Estado para el mensaje tipo toast
  const [toast, setToast] = useState("");

  // Función para agregar producto al carrito. Si ya existe, incrementa la cantidad.
  const _handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    // Mostrar toast
    setToast("Producto añadido al carrito con éxito");
    setTimeout(() => setToast(""), 1300);
    // Abrir el carrito al añadir un producto
    setCartOpen(true);
  };

  // Funciones para modificar cantidades
  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleClearCart = () => setCartItems([]);

  // Nueva función para eliminar individualmente un producto
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Esta es la estructura de la página principal (Home)
  const Home = () => {
    const navigate = useNavigate();

    // Selecciona aleatoriamente 5 productos destacados
    const featuredProducts = [...products]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    // Configuración del carrusel (react-slick)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        {/* Toast de confirmación */}
        {toast && (
          <>
            <style jsx="true">{`
              @keyframes slideUpFade {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-slideUpFade {
                animation: slideUpFade 0.5s ease-out;
              }
            `}</style>
            <div className="fixed bottom-5 right-5 bg-green-800 text-white px-4 py-2 rounded shadow z-[100] animate-slideUpFade">
              {toast}
            </div>
          </>
        )}

        {/* Se pasan cartItems y las funciones al Navbar */}
        <Navbar
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          cartItems={cartItems}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onClearCart={handleClearCart}
        />
        <Hero />

        {/* Sección de Productos Destacados (Carrusel) */}
        <section
          id="productos"
          className="p-16 bg-gray-500"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <h2 className="text-center text-2xl font-bold mb-6">Productos Destacados</h2>
          <Slider {...settings}>
            {featuredProducts.map((product) => (
              <div key={product.id} className="px-4">
                <div className="bg-gray-300 rounded-3xl p-2 text-center mx-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 mx-auto mb-3 rounded-md"
                  />
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/products")}
              className="bg-black font-bold text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition mt-5"
            >
              Ver todos los productos
            </button>
          </div>
        </section>

        {/* NOTA: Se elimina ProductList de la Home.
            Solo se muestra en la ruta "/nosotros" y en Home se muestran AboutUs y Footer */}
        <AboutUs />
        <GoToContact />
        <Footer />
      </>
    );
  };

  // Componente para la ruta "/products"
  // Se muestra el listado con ProductList junto con el carrito y un botón "Volver".
  // Además, se muestra el Footer al final de la página.
  const ProductsPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <div className="relative min-h-screen flex flex-col">
        {/* Botón "Volver" responsivo */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-50">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-200 font-bold text-black px-3 py-1 sm:px-4 sm:py-2 rounded-2xl hover:bg-gray-300 transition"
          >
            Volver
          </button>
        </div>
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50">
          <Cart
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            cartItems={cartItems}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onClearCart={handleClearCart}
            onRemoveItem={handleRemoveItem}
          />
        </div>
        <div className="flex-grow bg-gray-900">
          <ProductList onAddToCart={_handleAddToCart} />
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
