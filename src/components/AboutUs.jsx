import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container bg-gray-400 p-10 rounded-lg shadow-lg h-[80vh] flex items-center justify-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Sección de texto a la izquierda */}
      <div className="max-w-md">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <h3 className="text-2xl text-gray-600 mt-4">Your Trusted Partner</h3>
        <p className="text-gray-700 mt-4">
          Article evident arrived express highest men did boy. Mistress sensible entirely am so.
          Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.
        </p>
        <p className="text-gray-700 mt-4">
          He an thing rapid these after going drawn or. Timed she his law the spoil round defer.
          In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Conoce más
        </button>
      </div>

      {/* Logo grande a la derecha */}
      <div className="flex justify-center items-center">
        <img src="/img/logo.PNG" alt="Logo" className="max-h-80 w-auto" />
      </div>
    </div>
  );
};

export default AboutUs;
