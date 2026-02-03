import React from "react";

export default function FilterPanel({
  showPaid,
  setShowPaid,
  maxDistance,
  setMaxDistance,
  onAssignDelivery,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter & Assign</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {/* Paid/Unpaid Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Status Filter
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentFilter"
                value="all"
                checked={showPaid === null}
                onChange={() => setShowPaid(null)}
                className="w-4 h-4 text-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">All</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentFilter"
                value="unpaid"
                checked={showPaid === false}
                onChange={() => setShowPaid(false)}
                className="w-4 h-4 text-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">Unpaid</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentFilter"
                value="paid"
                checked={showPaid === true}
                onChange={() => setShowPaid(true)}
                className="w-4 h-4 text-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">Paid</span>
            </label>
          </div>
        </div>

        {/* Max Distance Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Delivery Distance: <span className="font-bold">{maxDistance} KM</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="0.5"
            value={maxDistance}
            onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 KM</span>
            <span>50 KM</span>
          </div>
        </div>

        {/* Assign Delivery Button */}
        <div>
          <button
            onClick={() => onAssignDelivery(maxDistance)}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Assign Nearest Order
          </button>
        </div>
      </div>
    </div>
  );
}
