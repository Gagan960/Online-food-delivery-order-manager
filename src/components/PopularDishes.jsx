import React, { useState } from "react";

export default function PopularDishes({ dishes, addToCart, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lastAdded, setLastAdded] = useState(null);

  const categories = ["All", "Veg", "Non-Veg", "Dessert"];

  const filteredDishes = dishes.filter((dish) =>
    (selectedCategory === "All" || dish.category === selectedCategory) &&
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (dish) => {
    addToCart(dish);
    setLastAdded(dish.name);
    setTimeout(() => setLastAdded(null), 2000);
  };

  return (
    <section id="menu" className="py-16 bg-white relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
        Popular Dishes
      </h2>

      {/* Success Toast */}
      {lastAdded && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300">
          ✅ {lastAdded} added to cart!
        </div>
      )}

      {/* Category Filter */}
      <div className="flex justify-center gap-3 flex-wrap mb-8 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border font-medium ${
              selectedCategory === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-gray-700 hover:bg-pink-100 border-gray-300"
            } transition duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dish Cards */}
      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-16">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-6 flex flex-col items-center"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-1">{dish.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{dish.category}</p>
              <p className="text-gray-600 text-center text-sm mb-2">{dish.description}</p>
              <span className="text-pink-500 font-bold text-lg mb-4">
                ₹{dish.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleAddToCart(dish)}
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold shadow hover:scale-105 transition-transform duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No dishes found for your search.
        </p>
      )}
    </section>
  );
}
