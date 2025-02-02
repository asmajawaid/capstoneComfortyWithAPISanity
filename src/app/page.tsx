
import React from 'react'
import ProductList from './product/productList';
import DeatailPage from '@/components/DeatailPage';
import Link from 'next/link';
import AllProduct from '@/components/AllProduct';

export default function Home() {
  return (
  <>
  <AllProduct/>
  {/* <DeatailPage/> */}
 {/* <ProductList/> */}
 <Link href="/product" className='bg-indigo-500 p-4 '>
 <button className='mt-16'>
  product
 </button>
 </Link>
  </>
  );
}
