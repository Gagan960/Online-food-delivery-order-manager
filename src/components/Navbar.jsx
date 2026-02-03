import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ totalItems, onCartClick, user, setSearchQuery }) {
  return (
    <nav className="sticky top-0 z-30 bg-white shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <span className="text-2xl font-bold text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            FoodieXpress
          </span>
          <ul className="flex flex-wrap gap-4 md:gap-8 text-base md:text-lg font-medium">
            <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="#menu" className="hover:text-pink-500 transition">Menu</a></li>
            <li><a href="#about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
            <li><Link to="/orders" className="hover:text-orange-500 transition font-semibold text-orange-500">Orders</Link></li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search dishes..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Cart + Profile/Login */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button onClick={onCartClick} className="relative group">
            <svg className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-2 py-0.5 shadow-lg">
                {totalItems}
              </span>
            )}
          </button>

          {/* User Button */}
          {user ? (
            <Link
              to="/profile"
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-md hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
