# Online Food Delivery Order Manager - User Guide

## 🎯 Quick Access

**URL:** `http://localhost:5173/orders`

---

## 📱 Application Sections

### Section 1: Add Order Form (Left Side)
**Purpose:** Create new food delivery orders

**Form Fields:**
1. **Order ID** (text) - e.g., "ORD001"
2. **Restaurant Name** (text) - e.g., "Pizza Palace"
3. **Item Count** (number) - Must be > 0
4. **Delivery Distance** (number) - Must be > 0, in KM
5. **Mark as Paid** (checkbox) - Optional payment indicator

**Actions:**
- Fill all fields
- Click "Add Order" button
- Order appears in list below

**Validation Rules:**
- ❌ Cannot submit with empty fields
- ❌ Item count must be > 0
- ❌ Distance must be > 0
- ✅ Error message shows if invalid

---

### Section 2: Filter & Assign (Right Side, Top)
**Purpose:** Filter orders and assign delivery

**Filter Options:**

1. **Payment Status Filter**
   - ⭕ All - Shows all orders
   - ⭕ Unpaid - Shows only unpaid orders
   - ⭕ Paid - Shows only paid orders

2. **Maximum Distance Filter**
   - Slider: 1 KM to 50 KM
   - Shows current value
   - Updates in real-time

3. **Assign Button**
   - Triggers order assignment
   - Assigns nearest unpaid order
   - Works within distance limit

---

### Section 3: Assignment Result (Right Side, Middle)
**Purpose:** Shows assignment outcome

**Two Possible Outcomes:**

1. **Success** (Green box)
   - ✓ Order assigned
   - Shows order details:
     - Order ID
     - Restaurant name
     - Item count
     - Distance
     - Payment status
   - Status: "Ready for Delivery"

2. **No Result** (Blue box)
   - Message: "No order available"
   - Reason: No unpaid orders within distance

---

### Section 4: Orders List (Right Side, Bottom)
**Purpose:** View all created orders

**Table Columns:**
| Column | Shows | Color |
|--------|-------|-------|
| Order ID | e.g., ORD001 | Gray |
| Restaurant | e.g., Pizza Palace | Gray |
| Items | e.g., 3 | Gray |
| Status | Paid / Unpaid | Green / Yellow |
| Distance | e.g., 5.5 KM | Gray |

**Status Badges:**
- 🟢 **Green** = Paid
- 🟡 **Yellow** = Unpaid

---

## 📊 Example Workflow

### Step 1: Add Multiple Orders
```
Order 1:
- ID: ORD001
- Restaurant: Pizza Palace
- Items: 3
- Distance: 5.5 KM
- Paid: ❌ (Unpaid)

Order 2:
- ID: ORD002
- Restaurant: Burger Barn
- Items: 2
- Distance: 8.0 KM
- Paid: ✅ (Paid)

Order 3:
- ID: ORD003
- Restaurant: Sushi House
- Items: 4
- Distance: 3.2 KM
- Paid: ❌ (Unpaid)
```

### Step 2: View All Orders
Table shows all 3 orders with respective status badges

### Step 3: Filter & Assign
**Action:** Set max distance to 10 KM, click "Assign Nearest Order"
**Result:** ORD003 (3.2 KM - nearest unpaid) is assigned
**Display:** Green success box with ORD003 details

### Step 4: Change Filters
**Action:** Set max distance to 3 KM, click "Assign Nearest Order"
**Result:** "No order available" message (ORD001 is 5.5 KM > 3 KM)

---

## 💡 Smart Assignment Logic Explained

### Algorithm in Plain English:
```
1. FILTER unpaid orders only
   ✓ Include: orders where Paid = ❌
   ✗ Exclude: orders where Paid = ✅

2. FILTER by distance
   ✓ Include: orders ≤ X KM
   ✗ Exclude: orders > X KM

3. FIND the nearest
   ✓ Select order with MINIMUM distance

4. ASSIGN or MESSAGE
   ✓ If found: Show assigned order details
   ✗ If not found: Show "No order available"
```

### Example Assignment:
```
Available unpaid orders within 10 KM:
- ORD001: 5.5 KM ← Not assigned
- ORD003: 3.2 KM ← ✅ ASSIGNED (nearest)
```

---

## 🎨 Color Scheme

**Application Colors:**
- 🟠 **Orange** (#f97316) - Primary/Buttons
- 🟢 **Green** - Paid status / Success
- 🟡 **Yellow** - Unpaid status / Warning
- 🔵 **Blue** - Information messages
- ⚫ **Gray** - Text / Backgrounds

---

## ⌨️ Keyboard Tips

**Form Submission:**
- Tab through fields
- Enter to submit
- Tab + Shift to go backward

**Sliders:**
- Arrow keys to adjust
- Click to set value

**Radio Buttons:**
- Arrow keys to switch
- Space to select

---

## 🐛 Troubleshooting

### Issue: "Order not adding"
**Solution:** Check for error message - all fields required

### Issue: "Can't assign orders"
**Possible reasons:**
- All orders are paid (need unpaid orders)
- All unpaid orders exceed distance limit
- No orders added yet

**Solution:** Add unpaid orders within distance range

### Issue: "Wrong order assigned"
**Note:** System assigns NEAREST order (minimum distance), not first added

---

## 📋 Business Rules

✅ **Can Assign:**
- Unpaid orders only
- Within maximum distance
- Will assign nearest one

❌ **Cannot Assign:**
- Paid orders
- Orders beyond max distance
- No available orders

⚠️ **Data Rules:**
- All fields required
- Item count must be positive
- Distance must be positive
- Order IDs should be unique (for business logic)

---

## 🚀 Tips & Tricks

**Tip 1: Testing Assignment Logic**
1. Add orders with various distances
2. Try different max distance values
3. Watch assignment change based on filters

**Tip 2: Understanding Status Badges**
- Green badge = Already paid, can't be assigned
- Yellow badge = Unpaid, eligible for assignment

**Tip 3: Form Errors**
- Fill field and click elsewhere to dismiss error
- All validation happens on submit

**Tip 4: Distance Slider**
- Drag for quick changes
- Click on bar for precise values
- Use arrow keys for fine control

---

## 📞 Support Information

**For questions about:**
- Order Management: See ORDER_MANAGER_README.md
- Quick Start: See QUICK_START.md
- Implementation Details: See IMPLEMENTATION_COMPLETE.md
- Code Quality: See VALIDATION_REPORT.md

---

## 📝 Sample Test Scenarios

### Scenario 1: Simple Assignment
```
Objective: Assign one order
1. Add: ORD001 (5 KM, Unpaid)
2. Set distance: 10 KM
3. Assign
Result: ORD001 should be assigned
```

### Scenario 2: Multiple Unpaid Orders
```
Objective: Assign nearest unpaid
1. Add: ORD001 (8 KM, Unpaid)
2. Add: ORD002 (3 KM, Unpaid)
3. Add: ORD003 (5 KM, Unpaid)
4. Set distance: 10 KM
5. Assign
Result: ORD002 (3 KM) should be assigned
```

### Scenario 3: Distance Limitation
```
Objective: No order available
1. Add: ORD001 (10 KM, Unpaid)
2. Set distance: 5 KM
3. Assign
Result: "No order available" message
```

### Scenario 4: Paid Orders Only
```
Objective: No assignable orders
1. Add: ORD001 (5 KM, Paid)
2. Add: ORD002 (3 KM, Paid)
3. Set distance: 20 KM
4. Assign
Result: "No order available" message
```

---

## ✨ Best Practices

- ✅ Add multiple test orders before testing filters
- ✅ Mix paid and unpaid orders to test filters
- ✅ Try different distances to understand logic
- ✅ Check error messages for validation rules
- ✅ Use consistent order ID naming (e.g., ORD###)
- ✅ Test edge cases (0 KM, 50 KM limits)

---

**Enjoy using the Order Management System! 🚀**
