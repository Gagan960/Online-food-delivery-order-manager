import React from "react";
import heroImage from '../Images/photo-1504674900247-0877df9cc836.jpg';
export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80" 
      alt="Food Hero" className="absolute inset-0 w-full h-full object-cover brightness-75" /> */}
       <img src={heroImage} alt="Delicious food" className="absolute inset-0 w-full h-full object-cover brightness-75" />
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">Delicious Meals Delivered Fast</h1>
        <p className="text-lg md:text-2xl mb-8 font-medium animate-fade-in delay-100">Order your favorite dishes from FoodieXpress and enjoy at home!</p>
        <a href="#menu" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-3 rounded-full shadow-lg font-bold text-lg hover:scale-105 transition-transform duration-200 animate-bounce">Order Now</a>
      </div>
    </section>
  );
}
