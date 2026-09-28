const submitOrder = require("./producer");
const processOrders = require("./consumer");

submitOrder({
  id: 1,
  customerName: "Juan Dela Cruz",
  productId: 1,
  quantity: 5,
  totalAmount: 1750,
});

submitOrder({
  id: 2,
  customerName: "Maria Santos",
  productId: 2,
  quantity: 3,
  totalAmount: 1950,
});

submitOrder({
  id: 3,
  customerName: "Pedro Reyes",
  productId: 1,
  quantity: 2,
  totalAmount: 700,
});

console.log("\nOrders queued...\n");

setTimeout(() => {
  processOrders();
}, 3000);