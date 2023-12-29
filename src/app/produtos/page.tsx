import Product from "@/components/ui/products/ProductCard";
import { ProductType, productsList } from "@/app/api/data";

export default async function Produtos () {
  const products = await productsList();
  return (
    <div className="max-w-5xl mx-auto pt-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6" >
      {products.map((product:ProductType) => (
        <Product key={product.id} product={product}></Product>
      ))}
      </div>
    </div>
  );
};