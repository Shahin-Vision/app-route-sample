import ProductCard from "@/app/component/product-card/ProductCard";
import { ProductService } from "@/app/services/product-services";

export default async function CategoryProduct(props: any) {
  console.log("params", props);

  const myParams = props.params;
  const categoryName = decodeURIComponent(props.params.categoryName);
  const productId = myParams.productId;
  var productList;

  if (categoryName) {
    productList = await ProductService.getProductsByCategory(categoryName);
  }

  return (
    <div>
      category : {categoryName} <br />
      categoryProduct: ProductId : {productId}
      <br />
      <h3>{categoryName} Products</h3>
      <div className="d-flex flex-wrap gap-2">
        {productList.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}