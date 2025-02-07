"use client"
import Image from "next/image"
import Link from "next/link"
import { FiShoppingCart, FiTrash2 } from "react-icons/fi"
import { useWishlist } from "@/context/WishlistContext"
import { useCart } from "@/context/CartContext"

// Import or define the WishlistItem type
type WishlistItem = {
  _id: string
  title: string
  imageUrl: string
  price: number
}

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      _id: item._id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      quantity: 1,
    })
    removeFromWishlist(item._id)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
          <Link href="/product" className="text-[#029FAE] hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 flex flex-col">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <div className="mt-auto flex justify-between">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex items-center justify-center px-4 py-2 bg-[#029FAE] text-white rounded-md hover:bg-[#027d8e] transition duration-300"
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  <FiTrash2 className="mr-2" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

