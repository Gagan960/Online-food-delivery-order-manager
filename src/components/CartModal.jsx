import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartModal({ open, onClose, cart, updateQuantity, removeItem, clearCart, totalAmount }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black bg-opacity-40 transition-opacity">
      <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl w-full md:w-[400px] max-h-[80vh] overflow-y-auto p-6 relative animate-slide-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-2xl font-bold">×</button>
        <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Your Cart</h3>
        {orderPlaced ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-green-600 font-bold text-xl mb-4 animate-fade-in">Order placed successfully!</div>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full font-bold shadow hover:scale-105 transition-transform duration-200"
              onClick={() => {
                setOrderPlaced(false);
                clearCart();
                onClose();
                navigate("/");
              }}
            >Order More</button>
          </div>
        ) : cart.length === 0 ? (
          <div className="text-center text-gray-500 py-12">Your cart is empty 😞</div>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg shadow" />
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-pink-500 font-bold">₹{item.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 rounded-full px-2 py-1 text-lg font-bold hover:bg-pink-100">-</button>
                    <span className="px-2 font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 rounded-full px-2 py-1 text-lg font-bold hover:bg-pink-100">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="ml-2 text-red-500 hover:text-red-700 text-lg">🗑️</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span className="text-pink-500">₹{totalAmount.toFixed(2)}</span>
            </div>
            <button onClick={clearCart} className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 rounded-full font-bold shadow hover:scale-105 transition-transform duration-200 mb-2">Clear Cart</button>
            <button
              onClick={() => setOrderPlaced(true)}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-full font-bold shadow hover:scale-105 transition-transform duration-200 mb-2"
            >Place Order</button>
          </div>
        )}
      </div>
    </div>
  );
}
