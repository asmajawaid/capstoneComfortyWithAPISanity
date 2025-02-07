"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { useCart } from "@/context/CartContext"

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

const ProductCard = ({ product }: { product: ProducT }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    })
  }

  return (
    <div className="relative sm:min-w-[250px] sm:gap-8 md:min-w-[200px] md:max-w-[280px] md:gap-8 lg:min-w-[150px] lg:max-w-[200px] lg:gap-10 max-w-[350px] h-[377px] overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer">
      {/* Image */}
      <div className="w-full h-[312px] rounded-[6px] overflow-hidden">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.title}
          width={312}
          height={312}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col mt-4">
        <div className="text-[#007580] text-[16px] font-normal">{product.title}</div>
        <div className="flex items-center gap-2 text-[18px]">
          <span className="text-[#272343]">${product.price.toFixed(2)}</span>
          {product.priceWithoutDiscount && (
            <span className="text-[#9A9CAA] line-through text-[14px]">${product.priceWithoutDiscount.toFixed(2)}</span>
          )}
        </div>
      </div>
      {/* Add to Cart Button */}
      <div
        onClick={handleAddToCart}
        className="absolute top-[329.5px] right-4 bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md w-[44px] h-[44px] flex items-center justify-center text-[#272343] hover:text-white"
      >
        <FiShoppingCart className="w-5 h-5" />
      </div>
      {/* Badge */}
      {product.badge && (
        <div
          className={`${product.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"} absolute top-4 left-4 text-white text-[13px] font-medium py-1 px-2 rounded-md`}
        >
          {product.badge}
        </div>
      )}
    </div>
  )
}

export default function Shop() {
  const [products, setProducts] = useState<ProducT[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const productsPerPage = 8

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products?page=${page}&limit=${productsPerPage}`)
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()
        setProducts((prevProducts) => [...prevProducts, ...data])
      } catch (err) {
        setError("Failed to load products")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [page])

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  if (isLoading && page === 1) return <div>Loading products...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="max-w-[1320px] mx-auto p-8">
      <h1 className="text-[#272343] text-[32px] leading-[35px] text-center mb-8">Our popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {products.length >= productsPerPage * page && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="bg-[#029FAE] text-white font-medium py-2 px-4 rounded-full hover:bg-[#027d8e] transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

