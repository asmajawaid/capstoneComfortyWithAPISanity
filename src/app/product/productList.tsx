import { ProductData } from '@/datatype/productData'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default async function ProductList() {
  const res = await fetch("https://giaic-hackathon-template-08.vercel.app/api/products", {
    method: "GET",
  })

 

  const data: ProductData[] = await res.json()


  // console.log(data)
  return (
    <div>
    

{data.map((product) => {
        return (
          <Link href={`/product/${product._id}`} key={product._id}>
            <h2 >{product.title}</h2>
          </Link>
        )
      })}
    </div>
  )
}




// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   originalPrice?: number;
//   isNew?: boolean;
//   isSale?: boolean;
// };



// export default function ProductList() {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-8">Product List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//           >
//             <Link href={`/product/${product.id}`}>
//               <a>
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={300}
//                   height={300}
//                   className="rounded-lg"
//                 />
//                 <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
//                 <div className="flex items-center space-x-2 mt-2">
//                   <p className="text-green-600 text-lg font-bold">
//                     ${product.price}
//                   </p>
//                   {product.originalPrice && (
//                     <p className="text-gray-500 line-through text-sm">
//                       ${product.originalPrice}
//                     </p>
//                   )}
//                 </div>
//                 {product.isSale && (
//                   <span className="inline-block bg-red-500 text-white px-2 py-1 text-xs rounded mt-2">
//                     On Sale
//                   </span>
//                 )}
//                 {product.isNew && (
//                   <span className="inline-block bg-blue-500 text-white px-2 py-1 text-xs rounded mt-2 ml-2">
//                     New Arrival
//                   </span>
//                 )}
//               </a>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
