"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

type Slug = {
  current: string
  _type: "slug"
}

interface ProducT {
  _id: string
  title: string
  slug: Slug
  priceWithoutDiscount: number | null
  category: {
    _id: string
    title: string
  }
  tags: string[]
  price: number
  badge: string | null
  imageUrl: string
  description: string
  inventory: number
}

export default function NewStyle() {
  const [products, setProducts] = useState<ProducT[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products?limit=5") // Adjust this URL to your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError("Failed to load products")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) return <div>Loading products...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <div className="relative w-full py-16">
        {/* text rotate */}
        <div className="absolute transform -rotate-90 text-[20px] sm:text-[20px] md:text-[] lg:text-[28px] font-normal leading-[1.2] left-[-200px] top-[50%] -translate-y-1/2">
          Explore new and popular styles
        </div>

        <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
          {/* Main Image Section */}
          {products.length > 0 && (
            <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
              <div className="w-full h-full relative hover:shadow-2xl cursor-pointer">
                <Image
                  src={products[0].imageUrl || "/placeholder.svg"}
                  alt={products[0].title}
                  layout="responsive"
                  width={400}
                  height={560}
                  className="object-cover shadow-lg rounded-lg"
                />
                {products[0].badge && (
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                    {products[0].badge}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Grid of Smaller Images */}
          <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
            {products.slice(1, 5).map((product) => (
              <div key={product._id} className="relative hover:shadow-2xl cursor-pointer">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  layout="responsive"
                  width={200}
                  height={280}
                  className="rounded-lg object-cover shadow-lg"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

