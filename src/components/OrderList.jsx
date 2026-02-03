import React from "react";

export default function OrderList({ orders }) {
  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
        <p className="text-lg">No orders yet. Add an order to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Order ID</th>
              <th className="px-4 py-3 text-left font-semibold">Restaurant</th>
              <th className="px-4 py-3 text-center font-semibold">Items</th>
              <th className="px-4 py-3 text-center font-semibold">Status</th>
              <th className="px-4 py-3 text-right font-semibold">Distance (KM)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="px-4 py-3 font-medium text-gray-800">
                  {order.orderId}
                </td>
                <td className="px-4 py-3 text-gray-700">{order.restaurantName}</td>
                <td className="px-4 py-3 text-center text-gray-700">
                  {order.itemCount}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      order.isPaid
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Unpaid"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-gray-700">
                  {order.deliveryDistance.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Total Orders: <span className="font-semibold text-gray-800">{orders.length}</span>
        </p>
      </div>
    </div>
  );
}
