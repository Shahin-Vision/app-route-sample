"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>🛒 Your Cart</h2>
        <p>Your cart is empty.</p>
        <Link href="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      <ul className="list-group mb-3">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              {/* ✅ Replaced <img> with Next.js <Image> */}
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
              <div>
                <strong>{item.title}</strong>
                <div>
                  ₹{item.price} × {item.quantity ?? 1}
                </div>
              </div>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h4>Total: ₹{totalPrice.toFixed(2)}</h4>

      <div className="mt-3">
        <button className="btn btn-warning me-2" onClick={clearCart}>
          Clear Cart
        </button>
        <Link href="/checkout" className="btn btn-success">
          Proceed to Checkout →
        </Link>
      </div>
    </div>
  );
}
