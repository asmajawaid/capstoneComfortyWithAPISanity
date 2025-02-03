// product List PAGE

import BlogCard from "@/components/BlogCard";
import { ProducT } from "@/datatype/productData";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
// import { FiShoppingCart } from "react-icons/fi";

type ProductS = {
  _id: string;
    title: string;
    slug:{
      _type: "slug";
      current: string;
    }
    // slug: Slug;
    priceWithoutDiscount: number | null;
    price: number;
    badge: string | null;
    imageUrl: string;
}

export default async function  ProductListPage() {
  const query = `*[_type=='products'] | order(_createdAt asc){
  
   _id,
    title,
    priceWithoutDiscount,
    price,
    badge,
    "imageUrl": image.asset->url,
    "slug":slug.current
}`;

  const product: ProducT[] = await client.fetch(query);
  // console.log("Fetched Products:", products) 

  return (
    <>
     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
      {
        product.map((product: ProducT)=>(
          <Link href={`/product/${product._id}`} key={product._id}> 
          <BlogCard product={product}  />
           </Link>
        ))
      }

    
     </section>
    </>
  );
}
