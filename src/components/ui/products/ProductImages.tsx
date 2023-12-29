"use client"
import Image from "next/image"
import { ProductType } from "@/app/api/data"
import {useState} from "react"

type ProductImageProps = {
  product: ProductType
  fill?: boolean  
}
export default function ProductImages ({product,fill}: ProductImageProps){
  const [loading, setLoading] = useState(true)
  return fill?(
    <Image
    src={`${product.image}`}
    fill
    alt={product.title}
    className={`objet-cover ${loading?"scale-110 blur-sm grayscale ":"scale-100 blur-0 grayscale-0"}`}
    onLoadingComplete={() => setLoading(false)}/>
  ):(
    <Image 
    width={400}
    height={700}
    src={`${product.image}`}
    alt={product.title}
    className={`objet-cover ${loading?"scale-110 blur-sm grayscale ":"scale-100 blur-0 grayscale-0"}`}
    onLoadingComplete={() => setLoading(false)}/>
  ) 
}