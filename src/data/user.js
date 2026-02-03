// Dummy user and order history data
export const user = {
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  name: "John Doe",
  email: "john.doe@email.com",
  address: "123 Main St, Springfield",
  phone: "+1 555-123-4567",
  orders: [
    {
      id: 101,
      dish: "Spicy Ramen",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      price: 12.99,
      status: "Delivered"
    },
    {
      id: 102,
      dish: "Classic Burger",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
      price: 10.49,
      status: "Delivered"
    },
    {
      id: 103,
      dish: "Margherita Pizza",
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=600&q=80",
      price: 14.99,
      status: "Preparing"
    }
  ]
};
