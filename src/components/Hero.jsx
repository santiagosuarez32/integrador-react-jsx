import React from "react";

const Hero = () => {
  return (
    <section className="relative text-center bg-gray-100 py-16">
      <h1 className="text-4xl font-bold">HYPE-WORTHY BEAUTY DELIVERED MONTHLY</h1>
      <p className="text-lg mt-2">Score 5 full-size beauty products worth up to $260 for only $27.99/month.</p>
      <div className="mt-4 space-x-3">
        <button className="bg-black text-white px-6 py-2 rounded-lg outline-none" onClick={(e) => e.currentTarget.blur()}>JOIN NOW</button>
        <button className="border px-6 py-2 rounded-lg outline-none" onClick={(e) => e.currentTarget.blur()}>HOW IT WORKS</button>
      </div>
    </section>
  );
};

export default Hero;
