import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className=''>
         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
               <img src={assets.logo} className='mb-5 w-32' alt=""  />
               <p className='w-full md:w2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos repellendus consequatur nemo iusto, saepe fugit ducimus? Temporibus molestias aut modi! Quasi sapiente consequuntur nisi, amet quaerat molestiae eveniet quas ab?</p> 
            </div>

            <div className=''>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About us</Link></li>
                <li>Dilevery</li>
                <li>Privacy policy</li>



            </ul>
            </div>

            <div className=''>
                <p className='text-xl font-md mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-875412596</li>
                    <li>shiv@gmail.com</li>

                </ul>
            </div>
            </div> 

            <div>
                <hr />
                <p className='py-5 text-sm text-center '>Copyright 2026@ shiv@.com  - All Right Reserves </p>
                
                </div> 
        
        
        </div>
  )
}
