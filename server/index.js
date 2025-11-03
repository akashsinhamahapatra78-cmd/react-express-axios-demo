const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample products data
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 599.99 },
  { id: 3, name: 'Tablet', price: 399.99 },
  { id: 4, name: 'Headphones', price: 149.99 },
  { id: 5, name: 'Smart Watch', price: 299.99 },
  { id: 6, name: 'USB-C Cable', price: 9.99 }
];

// GET /api/products - Returns all products
app.get('/api/products', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json({
      success: true,
      data: products
    });
  }, 800);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Products API available at http://localhost:${PORT}/api/products`);
});
