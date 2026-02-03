import React, { useState } from "react";

export default function OrderForm({ onAddOrder }) {
  const [formData, setFormData] = useState({
    orderId: "",
    restaurantName: "",
    itemCount: "",
    isPaid: false,
    deliveryDistance: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.orderId.trim() ||
      !formData.restaurantName.trim() ||
      !formData.itemCount.trim() ||
      !formData.deliveryDistance.trim()
    ) {
      setError("All fields are required");
      return;
    }

    const itemCount = parseInt(formData.itemCount);
    const deliveryDistance = parseFloat(formData.deliveryDistance);

    if (itemCount <= 0) {
      setError("Item count must be greater than 0");
      return;
    }

    if (deliveryDistance <= 0) {
      setError("Delivery distance must be greater than 0");
      return;
    }

    // Create new order
    const newOrder = {
      orderId: formData.orderId.trim(),
      restaurantName: formData.restaurantName.trim(),
      itemCount: itemCount,
      isPaid: formData.isPaid,
      deliveryDistance: deliveryDistance,
    };

    onAddOrder(newOrder);

    // Reset form
    setFormData({
      orderId: "",
      restaurantName: "",
      itemCount: "",
      isPaid: false,
      deliveryDistance: "",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-orange-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Order</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Order ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order ID
            </label>
            <input
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              placeholder="e.g., ORD001"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant Name
            </label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="e.g., Pizza Palace"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Item Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Count
            </label>
            <input
              type="number"
              name="itemCount"
              value={formData.itemCount}
              onChange={handleChange}
              placeholder="e.g., 3"
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Delivery Distance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Distance (KM)
            </label>
            <input
              type="number"
              name="deliveryDistance"
              value={formData.deliveryDistance}
              onChange={handleChange}
              placeholder="e.g., 5.5"
              step="0.1"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Payment Status */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPaid"
            name="isPaid"
            checked={formData.isPaid}
            onChange={handleChange}
            className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
          />
          <label htmlFor="isPaid" className="ml-2 text-sm font-medium text-gray-700">
            Mark as Paid
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Add Order
        </button>
      </form>
    </div>
  );
}
