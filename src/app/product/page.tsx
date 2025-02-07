// product List PAGE

import BlogCard from "@/components/BlogCard";
import ImageRow from "@/components/Image";
import { ProducT } from "@/datatype/productData";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
// import { FiShoppingCart } from "react-icons/fi";


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
     <div className="max-w-[1320px] mx-auto p-8">
      <h1 className="text-[#272343] text-[32px] leading-[35px] text-start mb-8">
        All Products
      </h1>
     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
      {
        product.map((product: ProducT)=>(
          <Link href={`/product/${product._id}`} key={product._id}> 
          <BlogCard product={product}  />
           </Link>
        ))
      }

    
     </section>

          {/* form for email input */}
      <div className="mt-16 bg-[#F0F2F3] w-full">
        <div className="flex flex-col justify-center items-center p-5">
          <h2 className="text-[24px] md:text-[30px] font-medium leading-[40px] md:leading-[58px] text-center">
            Or subscribe to the newsletter
          </h2>
          <form action="" className="flex flex-col sm:flex-row gap-4 mt-5">
            <input
              type="email"
              placeholder="Email Address..."
              className="w-full sm:w-[400px] md:w-[600px] h-[40px] border hover:border-b-4 border-gray-400 p-2"
            />
            <button className="w-full sm:w-auto h-[40px] px-4 text-center cursor-pointer border text-black hover:border-b-4 border-gray-400 transition-colors">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
         {/* multi image components */}
      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="text-[30px] leading-[58px] font-medium">
          Follow products and discounts on Instagram
        </h2>
        <div className="p-3">
          {" "}
          <ImageRow />
        </div>
      </div>

     </div>
    </>
  );
}
