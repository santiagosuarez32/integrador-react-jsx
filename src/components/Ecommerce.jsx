
import Navbar from "./Navbar";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import CartModal from "./CartModal";
import AddToCartToast from "./AddToCartToast";
import HeroSection from "./HeroSection";
import Hero from "./Hero";
import Modal from "./Modal";
import Offer from "./Offer";


const Ecommerce = () => {
 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar
      
      />

      <Hero  />
      <Offer />

      {/* Carrusel sin animación */}


      {/* <main className="container mx-auto p-4 flex-grow">
        <div ref={categoryFilterRef}>
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </main> */}

      

     

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>© {new Date().getFullYear()} Mi Ecommerce. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Ecommerce;
