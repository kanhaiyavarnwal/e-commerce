import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

export default function BestSeller() {
    const{products}=useContext(ShopContext);
      
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
      if(!products || products.length === 0 ){
        setBestSeller([]);
    return;
      }
      const bestProducts=products.filter((item)=>(item.bestseller));
       
      setBestSeller(bestProducts.slice(0,5));
      
     
   
      
    },[products])
    
  return (
    <div className='my-10'>
            <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:test-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quisquam odit adipisci, a modi quis, quo perspiciatis quae necessitatibus sunt veniam numquam quibusdam tempora placeat, nisi doloremque dolore! Officiis!
            Nisi repellendus necessitatibus quis natus fuga quos odio? Ducimus doloremque recusandae excepturi, corporis tempora quia consectetur facere culpa necessitatibus iusto non veniam consequatur assumenda itaque totam provident molestias, a sed.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item,index)=>(
                    // <ProductItem key={index} id={item._id} name={item.name} price={item.price}  image={item.image}  />
                     <ProductItem  key={index} id={item._id} image={item.image} name={item.name}  price={item.price}/>
                    ))
                }
            </div>
    </div>
  )
}
