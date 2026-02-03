import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";
import AboutUs from "./components/AboutUs";
import PopularRestaurants from "./components/PopularRestaurants";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import CartModal from "./components/CartModal";
import UserProfile from "./components/UserProfile";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import FilterPanel from "./components/FilterPanel";
import OutputPanel from "./components/OutputPanel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { dishes } from "./data/dishes";

const getInitialCart = () => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
};

function App() {
  // Existing cart state
  const [cart, setCart] = useState(getInitialCart());
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Order Management State
  const [orders, setOrders] = useState([]);
  const [showPaid, setShowPaid] = useState(null); // null = all, true = paid, false = unpaid
  const [maxDistance, setMaxDistance] = useState(20);
  const [assignedOrder, setAssignedOrder] = useState(null);
  const [assignmentMessage, setAssignmentMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cart Functions (existing)
  const addToCart = (dish) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === dish.id);
      if (found) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Order Management Functions
  const handleAddOrder = (newOrder) => {
    setOrders((prev) => [...prev, newOrder]);
    setAssignedOrder(null);
    setAssignmentMessage("");
  };

  const assignDelivery = (maxDist) => {
    // Filter: consider only unpaid orders within maxDistance
    const eligibleOrders = orders.filter(
      (order) => !order.isPaid && order.deliveryDistance <= maxDist
    );

    if (eligibleOrders.length === 0) {
      setAssignedOrder(null);
      setAssignmentMessage("No order available");
      return;
    }

    // Find nearest unpaid order (minimum delivery distance)
    const nearestOrder = eligibleOrders.reduce((nearest, current) =>
      current.deliveryDistance < nearest.deliveryDistance ? current : nearest
    );

    setAssignedOrder(nearestOrder);
    setAssignmentMessage("");
  };

  return (
    <Router>
      <Routes>
        {/* Home/Food Ordering Page */}
        <Route
          path="/"
          element={
            <div className="bg-gray-50 min-h-screen flex flex-col">
              <Navbar
                totalItems={totalItems}
                onCartClick={() => setCartOpen(true)}
                user={user}
                setSearchQuery={setSearchQuery}
              />
              <Hero />
              <PopularDishes
                dishes={dishes}
                addToCart={addToCart}
                searchQuery={searchQuery}
              />
              <PopularRestaurants />
              <AboutUs />
              <ContactForm />
              <Footer />
              <CartButton totalItems={totalItems} onClick={() => setCartOpen(true)} />
              <CartModal
                open={cartOpen}
                onClose={() => setCartOpen(false)}
                cart={cart}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                clearCart={clearCart}
                totalAmount={totalAmount}
              />
            </div>
          }
        />

        {/* Order Manager Page */}
        <Route
          path="/orders"
          element={
            <div className="bg-gray-50 min-h-screen flex flex-col">
              <div className="flex-grow py-8 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-8">
                    <button
                      onClick={() => window.history.back()}
                      className="text-orange-500 hover:text-orange-600 font-medium mb-4 flex items-center"
                    >
                      ← Back to Home
                    </button>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                      Order Management System
                    </h1>
                    <p className="text-gray-600">
                      Manage food delivery orders efficiently
                    </p>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-1">
                      <OrderForm onAddOrder={handleAddOrder} />
                    </div>

                    {/* Right Column: Display & Filters */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Filter Panel */}
                      <FilterPanel
                        showPaid={showPaid}
                        setShowPaid={setShowPaid}
                        maxDistance={maxDistance}
                        setMaxDistance={setMaxDistance}
                        onAssignDelivery={assignDelivery}
                      />

                      {/* Output Panel */}
                      <OutputPanel
                        assignedOrder={assignedOrder}
                        message={assignmentMessage}
                      />

                      {/* Orders List */}
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                          All Orders
                        </h2>
                        <OrderList orders={orders} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login onLogin={setUser} />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Profile Page */}
        <Route
          path="/profile"
          element={user ? <UserProfile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
