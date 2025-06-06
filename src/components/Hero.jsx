import "@fontsource/oswald"; // Fuente base
import "@fontsource/oswald/700.css"; // Peso específico

const Hero = () => {
  return (
    <section 
      className="h-screen flex flex-col justify-center items-center text-center px-6 text-white relative w-full font-oswald"
      style={{ 
        backgroundImage: "url('/img/pexels-black-bird-859122-1751238 (1).png'), linear-gradient(to bottom, #560e68fb, #832c2c)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="relative w-full max-w-4xl px-4 sm:px-8 gap-3 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold font-oswald leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Libera tu potencial, paso a paso
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Estilo, comodidad y rendimiento en cada paso. Encuentra tu par perfecto hoy.
        </p>
       
      </div>
    </section>
  );
};

export default Hero;
