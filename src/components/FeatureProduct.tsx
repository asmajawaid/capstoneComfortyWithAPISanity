import { ProducT } from "@/datatype/productData";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";

export default async function FeatureProduct() {

   const query = `*[_type=='products'][4..7]{
     
      _id,
       title,
       priceWithoutDiscount,
       price,
       badge,
       "imageUrl": image.asset->url,
       "slug":slug.current
   }`;
   
     const product: ProducT[] = await client.fetch(query);

  return (
    <>
           <div className="relative w-full max-w-[1920px] mt-[px]">
             {/* Header */}
             <div className="flex justify-start items-center w-full h-[44px] mb-8">
               <h2 className="text-[32px] font-semibold text-[#272343]">
                 Featured Products
               </h2>
             </div>
     

       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
      {
        product.map((product: ProducT)=>(
          <Link href={`/product/${product._id}`} key={product._id}> 
          <BlogCard product={product}  />
           </Link>
        ))
      }

    
     </section>
     </div>
    </>
  );
}