// PRODUCT DETAIL PAGE

// import React from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { notFound } from "next/navigation";
// import { FiShoppingCart } from "react-icons/fi";
// import FeatureProduct from "@/components/FeatureProduct";
// import { useCart } from "@/context/CartContext";


//   // Define the structure for fetched product data
//   type ProductDetail = {
//     _id: string;
//     title: string;
//     description: string;
//     price: number;
//     priceWithoutDiscount: number | null;
//     badge: string | null;
//     imageUrl: string;
//     inventory: number | null;
//     tags: string[] | null;
//   };
  
//   // Fetch product data by ID
//   async function fetchProduct(id: string): Promise<ProductDetail | null> {
//     const query = `*[_type=='products' && _id == $id][0]{
//       _id,
//       title,
//       description,
//       price,
//       priceWithoutDiscount,
//       badge,
//       inventory,
//       tags,
//       "imageUrl": image.asset->url
//     }`;
  
//     const product = await client.fetch(query, { id });
//     return product || null;
//   }
  
//   export default async function ProductDetailPage({ params }: { params: { id: string } }) {

//     // const { addToCart } = useCart();
//     const { id } = params;
//     const product = await fetchProduct(id);
  
//     if (!product) return notFound();
  
//     const discount = product.priceWithoutDiscount && product.priceWithoutDiscount > product.price
//       ? product.priceWithoutDiscount - product.price
//       : null;
  
//     return (
//       <section className="max-w-5xl mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Product Image */}
//           <div className="mt-6 md:mt-11 flex justify-center">
//             {product.imageUrl ? (
//               <Image
//                 src={product.imageUrl}
//                 alt={product.title}
//                 width={576}
//                 height={605}
//                 className="w-full h-auto rounded-2xl shadow-md max-w-sm md:w-auto"
//               />
//             ) : (
//               <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
//                 <span>No Image Available</span>
//               </div>
//             )}
//           </div>
  
//           {/* Product Information */}
//           <div className="mt-6 md:mt-11 flex flex-col justify-evenly w-[541]">
//             <h1 className="text-[#272343] text-2xl md:text-6xl font-semibold">{product.title}</h1>
  
//             {product.badge && (
//               <span className="bg-[#029FAE] text-white text-xs font-semibold uppercase rounded-full py-1 px-3 inline-block mt-0 max-w-fit">
//                 {product.badge}
//               </span>
//             )}
  
//             <p className="mt-10 text-sm md:text-base py-2 px-2 text-[#272343] opacity-60">{product.description}</p>
  
//             <div className="mt-6 flex flex-row">
//               <p className="text-2xl font-semibold">
//                 ${product.price.toFixed(2)}
//               </p>
//               {discount && (
//                 <p className="text-sm text-gray-500 line-through">
//                   ${product.priceWithoutDiscount?.toFixed(2)}
//                 </p>
//               )}
//             </div>
  
//             {product.inventory !== null && (
//               <p className={`mt-2 ${product.inventory > 0 ? "text-green-600" : "text-red-600"}`}>
//                 {product.inventory > 0 ? `${product.inventory} in stock` : "Out of stock"}
//               </p>
//             )}
  
//             {product.tags && product.tags.length > 0 && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-medium">Tags:</h3>
//                 <ul className="flex gap-2 mt-2">
//                   {product.tags.map((tag) => (
//                     <li key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                       {tag}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
          
//           <button className="flex flex-row items-center justify-center mt-4 text-white bg-[#029FAE] font-medium text-base md:text-xl rounded-sm py-2 px-4 gap-1 hover:bg-teal-900 transition duration-300 max-w-fit"
//           //  onClick={() =>
//           //   addToCart({
//           //     _id: product._id,
//           //     title: product.title,
//           //     imageUrl: product.imageUrl,
//           //     price: product.price,
//           //     quantity: 1,
//           //   })
//           // }
//           >
//           <FiShoppingCart />
//          <span>Add To Cart</span>
//         </button>

//           </div>
//         </div>
//       </section>

   
//     );
//   }
  
  
  
 "use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FiShoppingCart } from "react-icons/fi"
import { useCart } from "@/context/CartContext"
import { client } from "@/sanity/lib/client"

type ProductDetail = {
  _id: string
  title: string
  description: string
  price: number
  priceWithoutDiscount: number | null
  badge: string | null
  imageUrl: string
  inventory: number | null
  tags: string[] | null
}

async function fetchProduct(id: string): Promise<ProductDetail | null> {
  const query = `*[_type=='products' && _id == $id][0]{
    _id,
    title,
    description,
    price,
    priceWithoutDiscount,
    badge,
    inventory,
    tags,
    "imageUrl": image.asset->url
  }`

  const product = await client.fetch(query, { id })
  return product || null
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = React.useState<ProductDetail | null>(null)
  const { addToCart } = useCart()
  const router = useRouter()

  React.useEffect(() => {
    fetchProduct(params.id).then(setProduct)
  }, [params.id])

  if (!product) return <div>Loading...</div>

  const discount =
    product.priceWithoutDiscount && product.priceWithoutDiscount > product.price
      ? product.priceWithoutDiscount - product.price
      : null

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      title: product.title,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    })
    router.push("/cart")
  }

  return (
    <>
    <section className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="mt-6 md:mt-11 flex justify-center">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              width={576}
              height={605}
              className="w-full h-auto rounded-2xl shadow-md max-w-sm md:w-auto"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
              <span>No Image Available</span>
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="mt-6 md:mt-11 flex flex-col justify-evenly w-[541]">
          <h1 className="text-[#272343] text-2xl md:text-6xl font-semibold">{product.title}</h1>

          {product.badge && (
            <span className="bg-[#029FAE] text-white text-xs font-semibold uppercase rounded-full py-1 px-3 inline-block mt-0 max-w-fit">
              {product.badge}
            </span>
          )}

          <p className="mt-10 text-sm md:text-base py-2 px-2 text-[#272343] opacity-60">{product.description}</p>

          <div className="mt-6 flex flex-row items-center gap-4">
            <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
            {discount && (
              <p className="text-sm text-gray-500 line-through">${product.priceWithoutDiscount?.toFixed(2)}</p>
            )}
          </div>

          {product.inventory !== null && (
            <p className={`mt-2 ${product.inventory > 0 ? "text-green-600" : "text-red-600"}`}>
              {product.inventory > 0 ? `${product.inventory} in stock` : "Out of stock"}
            </p>
          )}

          {product.tags && product.tags.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Tags:</h3>
              <ul className="flex gap-2 mt-2">
                {product.tags.map((tag) => (
                  <li key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            className="flex flex-row items-center justify-center mt-8 text-white bg-[#029FAE] font-medium text-base md:text-xl rounded-sm py-3 px-6 gap-2 hover:bg-teal-900 transition duration-300 max-w-fit"
            onClick={handleAddToCart}
          >
            <FiShoppingCart />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </section>

   

    </>
  )
}

 