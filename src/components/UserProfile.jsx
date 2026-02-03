import React from "react";
import { user } from "../data/user";

export default function UserProfile() {
  return (
    <section className="py-12 bg-white flex justify-center">
      <div className="bg-gray-50 rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full shadow-lg mb-4" />
        <h3 className="text-2xl font-bold mb-1">{user.name}</h3>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-1 rounded-full font-bold shadow hover:scale-105 transition-transform mb-4">Edit Profile</button>
        <div className="w-full mb-4">
          <div className="flex justify-between text-gray-700 mb-1">
            <span>Address:</span>
            <span>{user.address}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Phone:</span>
            <span>{user.phone}</span>
          </div>
        </div>
        <h4 className="font-bold text-lg mb-2">Order History</h4>
        <ul className="w-full">
          {user.orders.map((order) => (
            <li key={order.id} className="flex items-center gap-3 mb-2 bg-white rounded-lg shadow p-2">
              <img src={order.image} alt={order.dish} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <div className="font-semibold">{order.dish}</div>
                <div className="text-pink-500 text-sm">${order.price.toFixed(2)}</div>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${order.status === "Delivered" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>{order.status}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-1 rounded-full font-bold shadow hover:bg-pink-100 transition">Logout</button>
      </div>
    </section>
  );
}
