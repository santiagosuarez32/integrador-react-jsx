const HotOffers = () => {
    const offers = [
      { name: "Running Edge", price: "$165" },
      { name: "Maxim Wear", price: "$114" },
      { name: "Gear to Glare", price: "$250" },
    ];
  
    return (
      <section className="py-10 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-6">HOT SEARCH</h2>
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {offers.map((offer) => (
            <div key={offer.name} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{offer.name}</h3>
              <p className="text-red-500 font-bold">{offer.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
export default HotOffers;  