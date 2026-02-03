# 🏗️ Architecture & Component Structure

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        React App (App.jsx)                  │
│                                                              │
│  State:                                                      │
│  ├── orders: Order[]                                        │
│  ├── showPaid: boolean | null                              │
│  ├── maxDistance: number                                    │
│  ├── assignedOrder: Order | null                           │
│  └── assignmentMessage: string                             │
│                                                              │
│  Functions:                                                 │
│  ├── handleAddOrder(newOrder)                              │
│  └── assignDelivery(maxDistance)                           │
└─────────────────────────────────────────────────────────────┘
         |                                              |
         |                                              |
    Route: /                                      Route: /orders
    (Home/Food Ordering)                         (Order Manager)
         |                                              |
         └──────────────────────┬──────────────────────┘
                                |
                ┌───────────────┴───────────────┐
                |                               |
              Navbar                       Navbar
             (unchanged)            (with existing styles)
                |                               |
                |                               |
            [Existing Layout]        ┌─────────┴──────────┐
            ├─ Hero                  |                    |
            ├─ PopularDishes         Left Side      Right Side
            ├─ PopularRestaurants    |              |
            ├─ AboutUs               |              |
            ├─ ContactForm       ┌───┴────┐    ┌──┴────────┐
            ├─ CartButton        |         |    |           |
            └─ Footer            |         |    |           |
                                │ ORDER  │    │ FILTER &  │
                                │ FORM   │    │ DISPLAY   │
                                │         |    |           |
                                │         │    ├─────────┐ │
                                │         │    │ FILTER  │ │
                                │         │    │ PANEL   │ │
                                │         │    ├─────────┤ │
                                │         │    │ OUTPUT  │ │
                                │         │    │ PANEL   │ │
                                │         │    ├─────────┤ │
                                │         │    │ ORDER   │ │
                                │         │    │ LIST    │ │
                                │         │    │         │ │
                                └─────────┘    └─────────┘ │
```

---

## Component Hierarchy

```
App.jsx (ROOT)
│
├─── Route: "/" (Home Page - UNCHANGED)
│    └─ Navbar, Hero, PopularDishes, etc.
│
└─── Route: "/orders" (NEW Order Manager)
     ├── Navbar (existing, reused)
     │
     ├── Main Container (Grid Layout)
     │   │
     │   ├─ LEFT COLUMN (1/3 width)
     │   │  │
     │   │  └── OrderForm Component
     │   │      ├── orderId input
     │   │      ├── restaurantName input
     │   │      ├── itemCount input
     │   │      ├── deliveryDistance input
     │   │      ├── isPaid checkbox
     │   │      └── Submit button
     │   │
     │   └─ RIGHT COLUMN (2/3 width)
     │      │
     │      ├── FilterPanel Component
     │      │   ├── Payment Filter (radio)
     │      │   │   ├─ All option
     │      │   │   ├─ Unpaid option
     │      │   │   └─ Paid option
     │      │   ├── Distance Filter (slider)
     │      │   │   └─ 1-50 KM range
     │      │   └── Assign Button
     │      │
     │      ├── OutputPanel Component
     │      │   ├── (If assigned order)
     │      │   │   ├─ Success message
     │      │   │   └─ Order details cards
     │      │   └── (If no order)
     │      │       └─ "No order available"
     │      │
     │      └── OrderList Component
     │          ├── Table
     │          │   ├─ Order ID column
     │          │   ├─ Restaurant column
     │          │   ├─ Items column
     │          │   ├─ Status column (badge)
     │          │   └─ Distance column
     │          └── Total count display
     │
     └── Footer (existing, reused)
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interaction                         │
└─────────────────────────────────────────────────────────────┘
                        |
        ┌───────────────┼───────────────┐
        |               |               |
        v               v               v
   Fill Form      Adjust Slider    Click Filter
        |               |               |
        └───────────────┼───────────────┘
                        |
                        v
        ┌───────────────────────────────┐
        │   OrderForm.handleChange()    │
        │   OrderForm.handleSubmit()    │
        │   FilterPanel onChange events │
        └───────────────────────────────┘
                        |
                        v
        ┌───────────────────────────────┐
        │    App.handleAddOrder()       │
        │    App.assignDelivery()       │
        │    setState() updates         │
        └───────────────────────────────┘
                        |
        ┌───────────────┼───────────────┐
        |               |               |
        v               v               v
    State Change  New Order    Filter Values
    (orders)      (added)      (showPaid,
                                maxDistance)
        |               |               |
        └───────────────┼───────────────┘
                        |
                        v
        ┌─────────────────────────────────────┐
        │      Component Re-renders           │
        ├─────────────────────────────────────┤
        │ • OrderList (receives orders)       │
        │ • OutputPanel (receives result)     │
        │ • FilterPanel (receives state)      │
        │ • OrderForm (reset after submit)    │
        └─────────────────────────────────────┘
                        |
                        v
        ┌─────────────────────────────────────┐
        │      UI Updates on Screen           │
        ├─────────────────────────────────────┤
        │ • New order in table                │
        │ • Assignment result displayed       │
        │ • Filter values reflected           │
        └─────────────────────────────────────┘
```

---

## State Management Tree

```
App.jsx (ROOT STATE)
│
├─ orders: Order[] = []
│  └─ Contains: [
│      { orderId, restaurantName, itemCount, isPaid, deliveryDistance },
│      { ... },
│      { ... }
│     ]
│
├─ showPaid: boolean | null = null
│  └─ Values: null (All), true (Paid), false (Unpaid)
│
├─ maxDistance: number = 20
│  └─ Range: 1 - 50 KM
│
├─ assignedOrder: Order | null = null
│  └─ Contains: Single assigned order or null
│
├─ assignmentMessage: string = ""
│  └─ Contains: Error message or empty string
│
├─ cart: CartItem[] (EXISTING - unchanged)
├─ cartOpen: boolean (EXISTING - unchanged)
├─ user: User | null (EXISTING - unchanged)
└─ searchQuery: string (EXISTING - unchanged)
```

---

## Function Flow Diagram

```
┌──────────────────────────────────────────────────────────┐
│                handleAddOrder(newOrder)                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  1. setOrders(prev => [...prev, newOrder])              │
│     └─ Adds new order to array                          │
│                                                          │
│  2. setAssignedOrder(null)                              │
│     └─ Clears previous assignment                       │
│                                                          │
│  3. setAssignmentMessage("")                            │
│     └─ Clears any message                               │
│                                                          │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│               assignDelivery(maxDist)                    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  1. Filter eligible orders:                             │
│     eligibleOrders = orders.filter(                      │
│       order => !order.isPaid &&                          │
│                 order.deliveryDistance <= maxDist        │
│     )                                                    │
│     └─ Only unpaid orders within distance               │
│                                                          │
│  2. Check if any eligible:                              │
│     if (eligibleOrders.length === 0) {                  │
│       setAssignedOrder(null)                            │
│       setAssignmentMessage("No order available")         │
│       return                                             │
│     }                                                    │
│     └─ No orders found                                  │
│                                                          │
│  3. Find nearest order:                                 │
│     nearestOrder = eligibleOrders.reduce((nearest,      │
│       current) =>                                        │
│       current.deliveryDistance <                         │
│       nearest.deliveryDistance ?                         │
│         current : nearest                               │
│     )                                                    │
│     └─ Order with minimum distance                      │
│                                                          │
│  4. Set assignment result:                              │
│     setAssignedOrder(nearestOrder)                      │
│     setAssignmentMessage("")                            │
│     └─ Display assigned order                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Component Props Flow

```
App.jsx
│
├─ Passes to OrderForm:
│  └─ onAddOrder: (newOrder) => void
│
├─ Passes to FilterPanel:
│  ├─ showPaid: boolean | null
│  ├─ setShowPaid: (value) => void
│  ├─ maxDistance: number
│  ├─ setMaxDistance: (value) => void
│  └─ onAssignDelivery: (maxDistance) => void
│
├─ Passes to OutputPanel:
│  ├─ assignedOrder: Order | null
│  └─ message: string
│
└─ Passes to OrderList:
   └─ orders: Order[]
```

---

## File Dependencies

```
App.jsx
├─ imports OrderForm from ./components/OrderForm
├─ imports OrderList from ./components/OrderList
├─ imports FilterPanel from ./components/FilterPanel
├─ imports OutputPanel from ./components/OutputPanel
├─ imports Navbar from ./components/Navbar (existing)
├─ imports Footer from ./components/Footer (existing)
└─ imports React, useState, useEffect (dependencies)

OrderForm.jsx
└─ imports React, useState

OrderList.jsx
└─ imports React

FilterPanel.jsx
└─ imports React

OutputPanel.jsx
└─ imports React
```

---

## Styling Architecture

```
Tailwind CSS Utilities
├─ Layout Classes
│  ├─ Grid system (grid, grid-cols-1, grid-cols-3)
│  ├─ Flex utilities (flex, items-center)
│  └─ Spacing (px, py, mb, mt)
│
├─ Color Classes
│  ├─ Orange theme (#f97316) - bg-orange-500, etc.
│  ├─ Green (success) - bg-green-100, text-green-800
│  ├─ Yellow (warning) - bg-yellow-100, text-yellow-800
│  └─ Gray (neutral) - bg-gray-50, text-gray-700
│
├─ Component Classes
│  ├─ Cards - rounded-lg, shadow-md, p-6
│  ├─ Buttons - px-4, py-2, rounded-lg, transition
│  ├─ Badges - inline-block, px-3, py-1, rounded-full
│  └─ Tables - divide-y, hover:bg-gray-50
│
└─ Responsive Classes
   ├─ md: - Medium screens (768px+)
   └─ lg: - Large screens (1024px+)
```

---

## Assignment Algorithm Visualization

```
START: assignDelivery(maxDist)
│
├─ STEP 1: Filter Step
│  │
│  ├─ Check: isPaid === false?
│  │  ├─ YES: Include in eligible
│  │  └─ NO: Exclude
│  │
│  └─ Check: deliveryDistance <= maxDist?
│     ├─ YES: Keep in eligible
│     └─ NO: Remove from eligible
│
├─ STEP 2: Check Availability
│  │
│  ├─ Is eligible array empty?
│  │  ├─ YES: Show "No order available" → END
│  │  └─ NO: Continue to STEP 3
│
├─ STEP 3: Find Nearest
│  │
│  └─ Loop through eligible orders
│     ├─ Find: order with MINIMUM distance
│     └─ Result: nearestOrder
│
├─ STEP 4: Display Result
│  │
│  └─ Show assigned order details
│     ├─ Order ID
│     ├─ Restaurant
│     ├─ Items
│     ├─ Distance (with minimum value found)
│     └─ Status
│
└─ END: assignDelivery()
```

---

## Request/Response Flow for Add Order

```
User fills form and clicks "Submit"
│
├─ INPUT:
│  ├─ orderId: "ORD001"
│  ├─ restaurantName: "Pizza Palace"
│  ├─ itemCount: 3
│  ├─ isPaid: false
│  └─ deliveryDistance: 5.5
│
├─ VALIDATION (in OrderForm):
│  ├─ Check all fields present? ✓
│  ├─ Check itemCount > 0? ✓
│  ├─ Check deliveryDistance > 0? ✓
│  └─ All pass → Continue
│
├─ SUBMISSION:
│  └─ handleAddOrder(newOrder) called
│
├─ STATE UPDATE (in App):
│  ├─ setOrders(prev => [...prev, newOrder])
│  ├─ setAssignedOrder(null)
│  └─ setAssignmentMessage("")
│
├─ FORM RESET (in OrderForm):
│  └─ Clear all input fields
│
└─ OUTPUT:
   ├─ New order appears in table
   └─ Success (no error message)
```

---

## Component Responsibilities

```
OrderForm.jsx
├─ INPUT: Accept user order data
├─ VALIDATION: Check all inputs valid
├─ STATE: Manage form field values
├─ ERROR: Show validation errors
└─ OUTPUT: Pass data to App via onAddOrder()

OrderList.jsx
├─ INPUT: Receive orders array
├─ DISPLAY: Render orders in table
├─ FORMAT: Style status badges
├─ RESPONSIVE: Adapt layout
└─ OUTPUT: Show order information

FilterPanel.jsx
├─ INPUT: Receive filter state
├─ CONTROL: Radio buttons & slider
├─ STATE: Manage filter values
├─ TRIGGER: Call assignment function
└─ OUTPUT: Update parent state

OutputPanel.jsx
├─ INPUT: Receive assignment result
├─ DISPLAY: Show order or message
├─ STYLE: Professional UI layout
├─ CONDITIONAL: Different views
└─ OUTPUT: Visual feedback

App.jsx
├─ STATE: Manage orders & filters
├─ LOGIC: Handle business logic
├─ ROUTE: Manage navigation
├─ COMPOSITION: Organize components
└─ OUTPUT: Render full application
```

---

This architecture ensures:
✅ **Separation of Concerns** - Each component has single responsibility
✅ **One-way Data Flow** - Data flows down, events flow up
✅ **Reusability** - Components can be reused elsewhere
✅ **Testability** - Easy to test individual components
✅ **Maintainability** - Clear structure and organization
✅ **Scalability** - Easy to add new features
