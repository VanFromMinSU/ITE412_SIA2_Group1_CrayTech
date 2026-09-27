const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// ==========================================
// PRODUCT MODULE
// ==========================================

let products = [
  {
    id: 1,
    name: "Redclaw Crayfish",
    price: 350,
    sellingType: "piece",
    available: 50,
  },
  {
    id: 2,
    name: "Premium Redclaw Crayfish",
    price: 650,
    sellingType: "kilogram",
    available: 20,
  },
];

// GET /products
// Retrieve all products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// POST /products
// Add a new product
app.post("/products", (req, res) => {
  const { name, price, sellingType, available } = req.body;

  if (!name || price === undefined || !sellingType || available === undefined) {
    return res.status(400).json({
      message: "Name, price, sellingType, and available are required.",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    sellingType,
    available,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// ==========================================
// ORDER MODULE
// ==========================================

let orders = [
  {
    id: 1,
    customerName: "Juan Dela Cruz",
    productId: 1,
    quantity: 5,
    totalAmount: 1750,
    status: "Pending",
  },
];

// GET /orders
// Retrieve all orders
app.get("/orders", (req, res) => {
  res.status(200).json(orders);
});

// POST /orders
// Add a new order
app.post("/orders", (req, res) => {
  const { customerName, productId, quantity, totalAmount, status } = req.body;

  if (
    !customerName ||
    productId === undefined ||
    quantity === undefined ||
    totalAmount === undefined ||
    !status
  ) {
    return res.status(400).json({
      message:
        "customerName, productId, quantity, totalAmount, and status are required.",
    });
  }

  const newOrder = {
    id: orders.length + 1,
    customerName,
    productId,
    quantity,
    totalAmount,
    status,
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

// ==========================================
// DEFAULT ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.json({
    message: "CRAYTECH REST API is running.",
    endpoints: {
      products: "/products",
      orders: "/orders",
    },
  });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`CRAYTECH REST API running at http://localhost:${PORT}`);
});
