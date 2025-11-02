import { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Suspense } from "react";
import { ProductService } from "../services/product-services";
import ProductList from "../component/ProductList";
import GotoCartButton from "../component/GotoCartButton";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const metadata: Metadata = {
  title: "Products List Page",
  description: "Browse all available products",
};

async function getProducts(): Promise<Product[]> {
  try {
    const productResp = await ProductService.getProducts();
    return productResp;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  const cookieList = await cookies();
  const tokenCookie = cookieList.get("authToken");

  const headerList = await headers();
  const userAgent = headerList.get("user-agent");

  console.log("Token:", tokenCookie?.value);
  console.log("User-Agent:", userAgent);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <GotoCartButton />
      </div>

      <h2 className="text-center mb-4">🛍️ All Products</h2>

      <Suspense fallback={
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Loading products...</p>
        </div>
      }>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
}