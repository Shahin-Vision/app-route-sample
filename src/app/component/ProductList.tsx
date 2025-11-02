import ProductCard from "./product-card/ProductCard";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export default function ProductList({ products }: { products?: Product[] }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center my-5 text-danger">
        <h5>No products found.</h5>
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}