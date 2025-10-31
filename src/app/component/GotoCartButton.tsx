"use client";

import { useRouter } from "next/navigation";

export default function GotoCartButton() {
  const router = useRouter();

  return (
    <div className="mb-3">
      <button
        className="btn btn-warning me-2"
        onClick={() => router.push("/carts")}
      >
        Go to Cart
      </button>
    </div>
  );
}
