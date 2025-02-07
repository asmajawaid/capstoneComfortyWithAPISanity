// "use client";
// import { FiShoppingCart } from "react-icons/fi";
// import { ProducT } from "@/datatype/productData";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import React from "react";
// import { useCart } from "@/context/CartContext";

// export default function BlogCard({ product }: { product: ProducT }) {
//   const { addToCart } = useCart();

//   return (
//     <>
//       <div className="relative sm:min-w-[250px] sm:gap-8 md:min-w-[200px] md:max-w-[280px] md:gap-8 lg:min-w-[150px] lg:max-w-[200px] lg:gap-10 max-w-[350px] h-[377px] overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer ">
//         {/* Image */}
//         <div className="w-full h-[312px] rounded-[6px] overflow-hidden">
//           <Image
//             src={urlFor(product.imageUrl).url()}
//             width={312}
//             height={312}
//             alt={product.title}
//             className="object-cover w-full h-full"
//           />
//         </div>

//         {/* Content */}
//         <div className="flex flex-col mt-4 px-2">
//           <div className="text-[#007580] text-[16px] font-normal">
//             {product.title}
//           </div>
//           <div className="flex items-center gap-2 text-[18px]">
//             <span className="text-[#272343]">{product.price}</span>
//             {product.priceWithoutDiscount && (
//               <span className="text-[#9A9CAA] line-through text-[14px]">
//                 {product.priceWithoutDiscount}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Add to Cart Button */}
//         <div
//           onClick={() =>
//             addToCart({
//               _id: product._id,
//               title: product.title,
//               imageUrl: product.imageUrl,
//               price: product.price,
//               quantity: 1,
//             })
//           }
//           className="absolute top-[329.5px] right-0 bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md w-[44px] h-[44px] flex items-center justify-center text-[#272343] hover:text-white cursor-pointer"
//         >
//           <FiShoppingCart className="w-5 h-5" />
//         </div>

//         {/* Badge */}
//         {product.badge && (
//           <div
//             className={`${product.badge} absolute top-4 left-4 text-white text-[13px] font-medium py-1 px-2 rounded-[4px]`}
//           >
//             {product.badge}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

"use client"
import { FiHeart } from "react-icons/fi"
import type { ProducT } from "@/datatype/productData"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { useWishlist } from "@/context/WishlistContext"

export default function BlogCard({ product }: { product: ProducT }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const toggleWishlist = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id)
    } else {
      addToWishlist({
        _id: product._id,
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
      })
    }
  }

  return (
    <>
      <div className="relative sm:min-w-[250px] sm:gap-8 md:min-w-[200px] md:max-w-[280px] md:gap-8 lg:min-w-[150px] lg:max-w-[200px] lg:gap-10 max-w-[350px] h-[377px] overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer ">
        {/* Image */}
        <div className="w-full h-[312px] rounded-[6px] overflow-hidden">
          <Image
            src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
            width={312}
            height={312}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col mt-4 px-2">
          <div className="text-[#007580] text-[16px] font-normal">{product.title}</div>
          <div className="flex items-center gap-2 text-[18px]">
            <span className="text-[#272343]">{product.price}</span>
            {product.priceWithoutDiscount && (
              <span className="text-[#9A9CAA] line-through text-[14px]">{product.priceWithoutDiscount}</span>
            )}
          </div>
        </div>

        {/* Wishlist Button */}
        <div
          onClick={toggleWishlist}
          className="absolute top-[329.5px] right-0 bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md w-[44px] h-[44px] flex items-center justify-center text-[#272343] hover:text-white cursor-pointer"
        >
          <FiHeart className={`w-5 h-5 ${isInWishlist(product._id) ? "fill-current" : ""}`} />
        </div>

        {/* Badge
        {product.badge && (
          <div
            className={`${product.badge} absolute top-4 left-4 text-white text-[13px] font-medium py-1 px-2 rounded-[4px]`}
          >
            {product.badge}
          </div>
        )} */}
           
           {/* Badge */}
      {product.badge && (
        <div
          className={`${product.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"} absolute top-4 left-4 text-white text-[13px] font-medium py-1 px-2 rounded-md`}
        >
          {product.badge}
        </div>
      )}


      </div>
    </>
  )
}

