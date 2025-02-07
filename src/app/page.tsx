
import React from 'react'
import Hero from '@/components/Hero';
import CompanyLogo from './companyLogo/page';
import FeatureProduct from '@/components/FeatureProduct';
import TopCategories from '@/components/TopCategories';
import NewStyle from '@/components/NewStyle'
import OurProduct from '@/components/OurProduct'




export default function Home() {
  
  return (
  <>
     <Hero/>
     <CompanyLogo/>
     <FeatureProduct/>
     <TopCategories/>
     <NewStyle/>
     <OurProduct/>
 
 
  </>
  );
}
