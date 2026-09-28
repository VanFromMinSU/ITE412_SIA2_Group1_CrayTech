const queue = require("./queue");

function submitOrder(order) {
  queue.push(order);

  console.log(
    `Order submitted: ${JSON.stringify(order)}`
  );
}

module.exports = submitOrder;