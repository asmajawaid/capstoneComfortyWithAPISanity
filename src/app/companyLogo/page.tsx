import Image from 'next/image'
import React from 'react'

export default function CompanyLogo() {
  return (
    <div className="relative w-full max-w-[1321px] mx-auto my-10 px-4 py-6 border border-dashed border-[#007580]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6 justify-center items-center">
        {/* Logo Items */}
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo1.png" width={100} height={100} alt="Logo 1" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo2.png" width={100} height={100} alt="Logo 2" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo3.png" width={100} height={100} alt="Logo 3" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo4.png" width={100} height={100} alt="Logo 4" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo5.png" width={100} height={100} alt="Logo 5" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo5.png" width={100} height={100} alt="Logo 6" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo6.png" width={100} height={100} alt="Logo 7" />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Image src="/images/logo7.png" width={300} height={200} alt="Logo 8" className="w-[84px] h-[70px]" />
        </div>
      </div>
    </div>
  );
}