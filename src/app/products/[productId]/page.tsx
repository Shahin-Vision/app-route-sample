"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { ProductService } from "@/app/services/product-services";
import GotoCartButton from "@/app/component/GotoCartButton";

interface ProductDetailPageProps {
  params: Promise<{
    productId: string;
  }>;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.productId;

  const { addToCart } = useCart();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await ProductService.getProductById(Number(productId));
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h4>Product not found.</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <GotoCartButton />
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="img-fluid rounded shadow-sm"
            priority
          />
        </div>

        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h4 className="fw-bold">Price: ₹{product.price}</h4>

          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              addToCart(product);
              router.push("/carts");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
