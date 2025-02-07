import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoCreditCard } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuSprout } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";


export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start content-start mt-20 px-4 lg:px-[0px]">
        {/* Left side */}
        <div className="bg-[#007580] text-white p-6 lg:p-12 flex flex-col gap-12">
          <h1 className="text-[24px] lg:text-[32px] leading-[32px] lg:leading-[38px] font-bold">
            About Us - Comforty
          </h1>
          <p className="text-[14px] lg:text-[16px] leading-[20px] font-normal">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="flex justify-start mt-6">
            <Link
              href="/shop"
              className="inline-block py-3 px-6 bg-[#029FAE] text-white rounded-md text-center"
            >
              View collection
            </Link>
          </button>
        </div>

        {/* Right side */}
        <div className="w-full flex justify-center ">
          <Image
            src="/images/card1.jpg"
            width={619}
            height={478}
            alt="Comforty product"
            className="w-full max-w-[619px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-[#272343] text-[24px] lg:text-[32px] mt-[50px] lg:mt-[100px] mx-auto text-center font-semibold">
        What makes our Brand Different
      </h1>

      {/* Bottom section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 lg:max-w-[1320px] mx-auto mt-[50px] lg:mt-[100px]">
        {/* 1st */}
        <div className="flex flex-col items-start text-start bg-[#F9F9F9] p-6 rounded-md shadow-md">
          <TbTruckDelivery className="text-[#007580] text-3xl" />
          <h3 className="font-medium text-lg mt-4 text-[#007580]">
            Next day as standard
          </h3>
          <p className="text-sm mt-2 text-[#007580]">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        {/* 2nd */}
        <div className="flex flex-col items-start text-start bg-[#F9F9F9] p-6 rounded-md shadow-md">
          <IoCheckmarkCircleOutline className="text-[#007580] text-3xl" />
          <h3 className="font-medium text-lg mt-4 text-[#007580]">
            Made by true artisans
          </h3>
          <p className="text-sm mt-2 text-[#007580]">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>
        {/* 3rd */}
        <div className="flex flex-col items-start text-start bg-[#F9F9F9] p-6 rounded-md shadow-md">
          <GoCreditCard className="text-[#007580] text-3xl" />
          <h3 className="font-medium text-lg mt-4 text-[#007580]">
            Unbeatable prices
          </h3>
          <p className="text-sm mt-2 text-[#007580]">
            For our materials and quality, you will not find better prices anywhere
          </p>
        </div>
        {/* 4th */}
        <div className="flex flex-col items-start text-start bg-[#F9F9F9] p-6 rounded-md shadow-md">
          <LuSprout className="text-[#007580] text-3xl" />
          <h3 className="font-medium text-lg mt-4 text-[#007580]">
            Recycled packaging
          </h3>
          <p className="text-sm mt-2 text-[#007580]">
            We use 100 percent recycled materials to ensure our footprint is more
            manageable
          </p>
        </div>
      </div>

      {/* Popular Products */}
      <div className=" py-12">
        <h1 className="text-center text-[24px] lg:text-[32px] font-semibold">
          Our Popular Products
        </h1>
        <div className="grid grid-cols-[2fr_1fr_1fr] justify-center gap-6 mt-8 px-4">
          {/* Product 1 */}
          <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-start overflow-hidden group cursor-pointer hover:shadow-2xl">
            <Image
              src="/images/ourPopularProduct.jpg"
              alt="The Poplar suede sofa"
              width={500}
              height={312}
              className="w-full max-w-[500px]"
            />
            <p className="text-lg mt-4 font-medium p-2">
              The Poplar suede sofa
            </p>
            <p className="text-sm p-2">$99.00</p>
          </div>
          {/* Product 2 */}
          <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-start overflow-hidden group cursor-pointer hover:shadow-2xl">
            <Image
              src="/images/ourPopularProduct1.jpg"
              alt="The Dandy chair"
              width={150}
              height={312}
              className="w-full max-w-[300px] h-auto"
            />
            <p className="text-lg mt-4 font-medium p-2">The Dandy chair</p>
            <p className="text-sm p-2">$99.00</p>
          </div>
          {/* Product 3 */}
          <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-start overflow-hidden group cursor-pointer hover:shadow-2xl">
            <Image
              src="/images/o.jpg"
              alt="The Dandy chair"
              width={150}
              height={312}
              className="w-full max-w-[300px] h-auto"
            />
            <p className="text-lg mt-4 font-medium p-2">The Dandy chair</p>
            <p className="text-sm p-2">$99.00</p>
          </div>
        </div>
      </div>
    </>
  );
}