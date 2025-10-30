"use client";

import { useState, ChangeEvent } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

// ✅ Strongly typed form state
interface FormData {
  name: string;
  address: string;
  phone: string;
}

// ✅ Strongly typed cart item
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity?: number;
}

export default function CheckoutPage() {
  const { cartItems, totalItems, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    phone: "",
  });

  // ✅ Properly typed calculation
  const totalPrice = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.price * (item.quantity ?? 1),
    0
  );

  // ✅ Handle input changes safely
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("⚠️ Please fill in all details before placing your order!");
      return;
    }

    alert(`✅ Order placed successfully for ${form.name}!`);
    clearCart();
    router.push("/products");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-4">
        <h3>Checkout</h3>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold mb-3">Checkout</h2>

      <div className="row mt-3">
        {/* Shipping Info */}
        <div className="col-md-6 mb-4">
          <h5 className="mb-3">Shipping Information</h5>

          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            className="form-control mb-3"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            className="form-control mb-3"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100" onClick={handleCheckout}>
            Place Order
          </button>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <h5 className="mb-3">
            Order Summary ({totalItems} {totalItems === 1 ? "item" : "items"})
          </h5>

          <ul className="list-group mb-3 shadow-sm">
            {cartItems.map((item: CartItem) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  {item.title} × {item.quantity ?? 1}
                </span>
                <span>₹{(item.price * (item.quantity ?? 1)).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="text-end">
            <h5 className="fw-bold">Total: ₹{totalPrice.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
