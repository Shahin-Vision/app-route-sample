import { ProductService } from "../services/product-services";
import ProductCard from "./product-card/ProductCard";

// ✅ Define a proper Product type
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function ProductList() {
  // ✅ Get products safely
  const products: Product[] = await ProductService.getProducts();

  // ✅ Handle empty list gracefully
  if (!products || products.length === 0) {
    return <p className="text-center mt-4">No products available.</p>;
  }

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center p-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
