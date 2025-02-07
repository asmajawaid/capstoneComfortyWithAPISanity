"use client";
import Link from "next/link";
import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { GiSofa } from "react-icons/gi";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const wishlistContext = useWishlist();
  const { cart } = useCart();

  if (!wishlistContext) {
    return null; // or some loading state
  }

  const { wishlist } = wishlistContext;

  return (
    <header className="bg-[#F0F2F3] px-4 py-4 md:py-5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex flex-row items-center w-full md:w-auto">
            <div className="w-[40px] h-[40px] text-[#029FAE]">
              <GiSofa className="w-full h-full" />
            </div>
            <h1 className="text-[#272343] font-medium text-[26px] leading-[31px] ml-2">
              Comforty
            </h1>
          </div>
        </Link>

        {/* Search Bar, Wishlist, and Cart Section */}
        <div className="flex  md:flex-row items-center w-full md:w-auto gap-4">
          {/* Search Bar */}
          {/* <div className="flex items-center bg-white rounded-sm w-full max-w-[400px] h-[44px] px-4 border border-gray-300">
            <FiSearch className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow outline-none text-[16px] text-[#272343]"
            />
          </div> */}
  
  
  
          {/* <SearchBar /> */}

        

          {/* Wishlist Button */}
          {/* <Link href="/wishList" className="flex items-center gap-2">
            <FiHeart className="text-[#272343] w-5 h-5" />
            <span className="text-[#272343] font-medium text-[19px] hidden md:inline">
              Wishlist
            </span>
          </Link> */}

          <Link href="/wishList" className="flex items-center gap-2 relative">
            <FiHeart className="text-[#272343] w-5 h-5" />
            <span className="text-[#272343] font-medium text-[19px] hidden md:inline">
              Wishlist
            </span>
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#029FAE] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Button */}
          {/* <div className="bg-white rounded-sm flex items-center w-auto h-[44px] p-2 gap-2 border border-purple-600">
            <Link href="/cart" className="flex items-center gap-2">
              <FiShoppingCart className="text-[#272343] w-5 h-5" />
              <span className="text-[#272343] font-medium text-[19px] hidden md:inline">
                Cart
              </span>
            </Link>
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#007580] text-white text-xs font-medium">
              2
            </div>
          </div> */}

          <Link
            href="/cart"
            className="bg-white rounded-sm flex items-center w-auto h-[44px] p-2 gap-2 border border-purple-600"
          >
            <FiShoppingCart className="text-[#272343] w-5 h-5" />
            <span className="text-[#272343] font-medium text-[19px] hidden md:inline">
              Cart
            </span>
            {cart.length > 0 && (
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#007580] text-white text-xs font-medium">
                {cart.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
