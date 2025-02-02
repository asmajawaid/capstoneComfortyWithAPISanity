import { ProductData } from '@/datatype/productData'
import Link from 'next/link'
import React from 'react'

export default async function DeatailPage() {
  const res = await fetch("https://giaic-hackathon-template-08.vercel.app/api/products", {
    method: "GET",
  })

 

  const data: ProductData[] = await res.json()


//   console.log(data)
  return (
    <div>
      {/* {
        product.map((product) => {
          return <div key={product.id}>
            <Link href={`/${product.id}`}>
              <h1>{product.title}</h1>
            </Link>
          </div>
        })
      } */}

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

