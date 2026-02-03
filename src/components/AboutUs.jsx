import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-yellow-50 to-pink-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-0">
        <img src="https://tse1.mm.bing.net/th/id/OIP.6AEn4C-k7STPjvtrDFIAsQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="About FoodieXpress" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">About Us</h2>
          <p className="text-gray-700 text-lg mb-4">FoodieXpress delivers delicious meals from top local restaurants straight to your door. Our mission is to make food ordering fast, easy, and enjoyable. With a curated menu of popular dishes, seamless ordering, and friendly service, we bring the best flavors to your table.</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Fast delivery</li>
            <li>Fresh ingredients</li>
            <li>Wide variety of cuisines</li>
            <li>Easy online ordering</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
