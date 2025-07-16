// CartPage.jsx
import React from "react";
import { useCart } from "./CartContext";
import './style.css';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <section className="landing">
      <h1 style={{ textAlign: "center" }}>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <>
          <div className="food-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="food-card">
                <div className="image-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Condition:</strong> {item.condition}</p>
                <p><strong>Price:</strong> Ksh {item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary" style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Total: Ksh {totalPrice}</h2>
            <button
              className="checkout-button"
              onClick={() => alert("Thank you for your order! Checkout complete.")}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                marginTop: "15px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;
