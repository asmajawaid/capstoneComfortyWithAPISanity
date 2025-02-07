import React from 'react'
import { FaCheck } from "react-icons/fa6";
import DropDownLang from "@/components/DropDownLang"
import { CiCircleAlert } from "react-icons/ci";
import Link from 'next/link';

export default function Top() {
  return (
    <>
    <div className='bg-[#272343] flex flex-row justify-between items-center h-[55px] w-full py-[14px]'>
        <div className='flex flex-row items-center p-0 gap-2 opacity-[0.7] my-0 mx-auto'>
          <div className='text-[#FFFFFF] '>
            <FaCheck className='w-4 h-4'/>
          </div>

          <div className='text-[#FFFFFF] w-[231px] h-[14px] font-normal text-[13px] leading-[14.3px]'>
          Free shipping on all orders over $50
          </div>
        </div>

        <div className='flex flex-row items-start p-0 gap-6 opacity-[0.7] my-0 mx-auto w-[202px] h-[17px]'>
            <div className='flex flex-row items-center p-0 gap-[8px] w-[37px] h-[17px]'>
             
            <DropDownLang/>
            </div>
            <div className='text-[#FFFFFF] w-[30px] h-[17px] font-normal text-[13px] leading-[16.9px] items-center'><Link href="/faq">Faqs</Link></div>
            
             <div className='flex flex-row items-start p-0 w-[87px] h-[17px] gap-[6px]'>
              <Link href='/need-help' className='flex gap-1'>
                <div className='text-[#FFFFFF] w-4 h-4 opacity-70'><CiCircleAlert /></div>
                <div className='text-[#FFFFFF] w-[65px] h-[17px] font-normal text-[13px] leading-[16.9px] items-center'>Need Help</div>
                </Link>
             </div>
        </div>
    </div>
     
    </>
  )
}


