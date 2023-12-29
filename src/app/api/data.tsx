export type ProductType = {
  id: string;
  title: string;
  price: string;
  description?: string;
  category: string;
  image?: string;
}

export const productsList=async()=>{
  const response = await fetch('https://fakestoreapi.com/products')
  const data: ProductType[] = await response.json()
  return data
}