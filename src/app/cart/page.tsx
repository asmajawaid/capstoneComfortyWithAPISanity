// "use client"

// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { FaRegHeart, FaMinus, FaPlus } from "react-icons/fa6"
// import { RiDeleteBin6Line } from "react-icons/ri"
// import { useCart } from "@/context/CartContext"
// import Link from "next/link"
// import { Loader2 } from "lucide-react"
// import { loadStripe } from "@stripe/stripe-js"

// // Initialize Stripe outside of the component
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// export default function Cart() {
//   const { cart, updateQuantity, removeFromCart } = useCart()
//   const [mounted, setMounted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
//   const tax = subtotal * 0.1 // Assuming 10% tax
//   const shipping = subtotal > 100 ? 0 : 10 // Free shipping over $100
//   const total = subtotal + tax + shipping

//   const handleCheckout = async () => {
//     setIsLoading(true)
//     try {
//       const response = await fetch("/api/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           items: cart.map((item) => ({
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.title,
//                 images: [item.imageUrl],
//               },
//               unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
//             },
//             quantity: item.quantity,
//           })),
//         }),
//       })

//       const { sessionId } = await response.json()
//       const stripe = await stripePromise
//       const { error } = await stripe!.redirectToCheckout({ sessionId })

//       if (error) {
//         console.error("Stripe checkout error:", error)
//       }
//     } catch (error) {
//       console.error("Error:", error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

//       {cart.length === 0 ? (
//         <div className="text-center py-12">
//           <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
//           <Link href="/" className="text-[#029FAE] hover:underline">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             {cart.map((item) => (
//               <div key={item._id} className="flex border-b border-gray-200 py-4">
//                 <Image
//                   src={item.imageUrl || "/placeholder.svg"}
//                   alt={item.title}
//                   width={100}
//                   height={100}
//                   className="rounded-lg object-cover"
//                 />
//                 <div className="ml-4 flex-grow">
//                   <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
//                   <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
//                   <div className="flex items-center mt-2">
//                     <button
//                       onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <FaMinus />
//                     </button>
//                     <span className="mx-2 w-8 text-center">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <FaPlus />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex flex-col justify-between items-end">
//                   <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
//                   <div className="flex gap-2">
//                     <button className="text-gray-500 hover:text-[#029FAE]">
//                       <FaRegHeart size={20} />
//                     </button>
//                     <button onClick={() => removeFromCart(item._id)} className="text-gray-500 hover:text-red-500">
//                       <RiDeleteBin6Line size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
//               </div>
//             </div>
//             <div className="border-t pt-4 mb-6">
//               <div className="flex justify-between font-semibold text-lg">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </div>
//             <button
//               className="w-full bg-[#029FAE] text-white font-medium rounded-full py-3 hover:bg-[#027d8e] transition duration-300 flex items-center justify-center"
//               onClick={handleCheckout}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                   Processing...
//                 </>
//               ) : (
//                 "Proceed to Checkout"
//               )}
//             </button>
//             <Link href="/" className="block text-center mt-4 text-[#029FAE] hover:underline">
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }




"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { FaRegHeart, FaMinus, FaPlus } from "react-icons/fa6"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useCart } from "@/context/CartContext"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"
import { toast } from "react-hot-toast"

// Initialize Stripe outside of the component
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const shipping = subtotal > 100 ? 0 : 10 // Free shipping over $100
  const total = subtotal + tax + shipping

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.imageUrl],
              },
              unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
            },
            quantity: item.quantity,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const { sessionId } = await response.json()
      const stripe = await stripePromise
      const { error } = await stripe!.redirectToCheckout({ sessionId })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Checkout failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Link href="/" className="text-[#029FAE] hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item._id} className="flex border-b border-gray-200 py-4">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaMinus />
                    </button>
                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="flex gap-2">
                    <button className="text-gray-500 hover:text-[#029FAE]">
                      <FaRegHeart size={20} />
                    </button>
                    <button onClick={() => removeFromCart(item._id)} className="text-gray-500 hover:text-red-500">
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="w-full bg-[#029FAE] text-white font-medium rounded-full py-3 hover:bg-[#027d8e] transition duration-300 flex items-center justify-center disabled:opacity-50"
              onClick={handleCheckout}
              disabled={isLoading || cart.length === 0}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Proceed to Checkout"
              )}
            </button>
            <Link href="/" className="block text-center mt-4 text-[#029FAE] hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

