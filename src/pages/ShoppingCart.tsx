/* TASK 
Build a shopping cart that displays total price when adding items.
Requireents:
- Implement the Add to Cart logic, add an item to the cart when the
  button is clicked
- Implement the + and - buttons so that you can add or remove items from the cart
- Implement the total sum at the bottom of the page
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

const ShoppingCart = () => {
  const cart = [{ name: "apple", quantity: 3, price: 0.39 }];

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button>-</button>
                {item.quantity}
                <button>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: $0.00</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
