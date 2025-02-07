import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="relative bg-[#F0F2F3] w-full h-auto lg:h-[850px] px-4 py-10 lg:py-0 rounded-lg mt-6">
      {/* Container */}
      <div className="max-w-[1321px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
        {/* Text Content */}
        <div className="space-y-5 px-4 lg:px-10 mt-5">
          <p className="text-[#272343] tracking-widest font-normal text-[14px] leading-[14px]">
            Welcome to Chairy
          </p>
          <h1 className="text-[#272343] tracking-wide font-bold text-3xl lg:text-[50px] leading-9 lg:leading-[66px]">
            Best Furniture <br />
            Collection for your <br />
            interior.
          </h1>
          <div className="flex justify-start">
            <Link href="/shop" className="bg-[#029FAE] text-white flex items-center justify-center px-6 py-3 rounded-lg text-[16px] leading-[17.6px] gap-2">
              Shop Now
              <FaArrowRightLong className="text-white w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end mt-5 lg:mt-28">
          <Image
            src="/images/BG.png"
            width={434}
            height={584}
            alt="chairy"
            className="w-[217px] h-[292px] lg:w-[434px] lg:h-[584px]"
          />
        </div>
      </div>
    </div>
  );
}