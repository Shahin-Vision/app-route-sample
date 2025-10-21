"use client";

import { useRouter } from "next/navigation";

export default function GotoCartButton() {
  const router = useRouter();
  return (
    <div>
      <button
        className="btn btn-warning"
        onClick={() => {
          router.push("/carts");
        }}
      >
        Go to Cart (push)
      </button>
      <button className="btn btn-danger"
        onClick={() => {
            router.replace('/carts')
        }}>Go to Cart (replace)
        </button>
    </div>
  );
}