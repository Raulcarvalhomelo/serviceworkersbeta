import Image from "next/image";
import { ProductType } from "@/app/api/data";
import ProductImages from "./ProductImages";

type ProductProps = {
  product: ProductType;
}
export default  function Product ({ product }: ProductProps) {
  
  return (
    <div className=" shadow-lg dark:bg-gray-800 dark:text-gray-200 flex p-5 flex-col h-96 rounded-lg">
      <div className=" relative max-h-72 flex-1">
        <ProductImages  product={product} fill/>
      </div>
      <div className="flex justify-between font-bold gap-5 m-3">
        <p className="w-40 truncate">{product.title} </p>
        <p className="text-md text-emerald-300">R${product.price} </p>
        {/* <div className="flex justify-between text-xs line-through decoration-red-500 decoration-3 font-bold mb-3">R${product.price} </div> */}
      </div>
      <button className="w-full bg-teal-500 hover:bg-teal-700 text-white text-sm text-center font-bold py-2 px-3.5 rounded-md">Adicionar Carrinho</button>
     </div>
  );
};