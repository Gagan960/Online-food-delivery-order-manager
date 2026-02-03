import React, { useState } from "react";
import { restaurants } from "../data/restaurants";

export default function PopularRestaurants() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    Popular Restaurants
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {restaurants.map((r) => (
                        <div
                            key={r.id}
                            onClick={() => setSelectedRestaurant(r)}
                            className="cursor-pointer bg-gray-50 rounded-xl shadow-lg p-6 flex items-center gap-6 hover:scale-105 transition-transform"
                        >
                            <img
                                src={r.image}
                                alt={r.name}
                                className="w-24 h-24 object-cover rounded-lg shadow"
                            />
                            <div>
                                <h3 className="text-xl font-bold mb-2">{r.name}</h3>
                                <p className="text-gray-600 mb-2">{r.description}</p>
                                <div className="text-yellow-500 font-bold">⭐ {r.rating}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedRestaurant && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-lg relative">
                        <button
                            onClick={() => setSelectedRestaurant(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedRestaurant.image}
                            alt={selectedRestaurant.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-1">{selectedRestaurant.name}</h3>
                        <p className="text-gray-700 mb-2">{selectedRestaurant.description}</p>
                        <p className="text-sm text-gray-600 mb-2">📍 {selectedRestaurant.address}</p>
                        <div className="mb-2">
                            <span className={`text-sm font-medium px-2 py-1 rounded ${selectedRestaurant.openNow ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {selectedRestaurant.openNow ? "Open Now" : "Closed"}
                            </span>
                            <span className="ml-2 text-gray-600">Open till: {selectedRestaurant.openTill}</span>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-800 mb-1">🍽️ Menu:</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                {selectedRestaurant.menu.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-800 mb-1">⭐ Special Dishes:</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                {selectedRestaurant.specialDishes.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}
