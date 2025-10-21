import ProductCard from "@/app/component/product-card/ProductCard";
import { ProductService } from "@/app/services/product-services";

interface CategoryProductProps {
  params: {
    categoryName: string;
    productId?: string;
  };
}

export default async function CategoryProduct({ params }: CategoryProductProps) {
  const categoryName = decodeURIComponent(params.categoryName);
  const productId = params.productId;
  let productList: { id: number; title: string; image: string }[] = [];

  if (categoryName) {
    productList = await ProductService.getProductsByCategory(categoryName);
  }

  return (
    <div>
      category : {categoryName} <br />
      ProductId : {productId}
      <h3>{categoryName} Products</h3>
      <div className="d-flex flex-wrap gap-2">
        {productList.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
