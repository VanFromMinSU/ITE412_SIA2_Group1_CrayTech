const queue = require("./queue");

function processOrders() {
  while (queue.length > 0) {
    const order = queue.shift();

    console.log(
      `Processing order for ${order.customerName}...`
    );

    console.log(
      `Notification sent: Order #${order.id} confirmed`
    );
  }
}

module.exports = processOrders;