import React from "react";

export default function OutputPanel({ assignedOrder, message }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Assignment Result</h2>

      {message && !assignedOrder && (
        <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 text-center">
          <p className="text-blue-800 font-semibold text-lg">{message}</p>
        </div>
      )}

      {assignedOrder && (
        <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
              ✓
            </div>
            <h3 className="text-xl font-bold text-green-800">Order Assigned Successfully!</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-xs text-gray-500 uppercase font-semibold">Order ID</p>
              <p className="text-lg font-bold text-gray-800">{assignedOrder.orderId}</p>
            </div>

            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-xs text-gray-500 uppercase font-semibold">Restaurant</p>
              <p className="text-lg font-bold text-gray-800">
                {assignedOrder.restaurantName}
              </p>
            </div>

            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-xs text-gray-500 uppercase font-semibold">Item Count</p>
              <p className="text-lg font-bold text-gray-800">{assignedOrder.itemCount} items</p>
            </div>

            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-xs text-gray-500 uppercase font-semibold">
                Delivery Distance
              </p>
              <p className="text-lg font-bold text-gray-800">
                {assignedOrder.deliveryDistance.toFixed(1)} KM
              </p>
            </div>

            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-xs text-gray-500 uppercase font-semibold">Payment Status</p>
              <p className="text-lg font-bold text-yellow-600">
                {assignedOrder.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>

            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-xs text-gray-500 uppercase font-semibold">Status</p>
              <p className="text-lg font-bold text-green-600">Ready for Delivery</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
