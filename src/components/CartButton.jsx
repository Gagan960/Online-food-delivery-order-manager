import React from "react";

export default function CartButton({ totalItems, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-200"
      aria-label="View Cart"
    >
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-white text-pink-500 text-xs rounded-full px-2 py-0.5 shadow-lg font-bold">{totalItems}</span>
      )}
    </button>
  );
}
