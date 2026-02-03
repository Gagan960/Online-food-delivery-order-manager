// Quick Integration Guide - Add Navigation Link to Order Manager

// Option 1: Update Navbar.jsx to include Orders link
// Add this link in your navigation menu:

<Link to="/orders" className="text-gray-700 hover:text-orange-500 font-medium">
  Order Manager
</Link>

// Option 2: Direct URL Access
// Navigate to: http://localhost:5173/orders (or your dev server URL)

// Sample Test Data to Try:

Order 1:
- Order ID: ORD001
- Restaurant: Pizza Palace
- Items: 3
- Distance: 5.5 KM
- Paid: Unchecked

Order 2:
- Order ID: ORD002
- Restaurant: Burger Barn
- Items: 2
- Distance: 8.0 KM
- Paid: Checked (Paid)

Order 3:
- Order ID: ORD003
- Restaurant: Sushi House
- Items: 4
- Distance: 3.2 KM
- Paid: Unchecked

// Test Assignment:
1. Set max distance to 10 KM
2. Click "Assign Nearest Order"
3. Should assign ORD003 (3.2 KM - nearest unpaid order)
4. Set max distance to 3 KM
5. Click "Assign Nearest Order"
6. Should show "No order available" (ORD001 is 5.5 KM > 3 KM)
