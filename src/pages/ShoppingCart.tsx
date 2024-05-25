/* TASK 
Build a shopping cart that displays total price when adding items.
Requireents:
- Implement the Add to Cart logic, add an item to the cart when the
  button is clicked
- Implement the + and - buttons so that you can add or remove items from the cart
- Implement the total sum at the bottom of the page
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

interface Item {
  name: string;
  price: number;
}

interface CartItem extends Item {
  quantity: number;
}

const items: Item[] = [
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
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCartHandler = (itemToAdd: Item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.name === itemToAdd.name
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === itemToAdd.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...itemToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCartHandler = (itemToRemove: string) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.name === itemToRemove) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[]);
    });
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

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
              <button onClick={() => addToCartHandler(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => removeFromCartHandler(item.name)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => addToCartHandler(item)}>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
