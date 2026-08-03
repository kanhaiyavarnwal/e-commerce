// import React from 'react'
// import { assets } from '../assets/assets'

// export default function Hero() {
//   return (
// //     <div className='flex flex-col sm:flex-row border border-gray-400'>
// // {/* hero left side */}
// // <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
// // <div className='text-[#414141]'>
// //     <div className='flex items-center gap-2'>
// // <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
// // <p className='font-md text-sm md:text-base'>OUR BESTSELLERS</p>
// //     </div>
// //     <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
// //     <div className='flex items-center gap-2'>
// //         <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
// //         <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
// //     </div>

// // </div>
// // </div>
// //  {/* hero right side */}
// //  <img className='w-full sm:w-1/2' src={assets.hero_img} alt=""  />

// //     </div>


//   )
// }



import React from "react";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              <Star size={16} className="fill-emerald-400" />
              Best Fashion Collection 2026
            </div>

            {/* Heading */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Discover Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Perfect Style
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Explore premium fashion, modern accessories, and trending
                collections designed to elevate your lifestyle with elegance
                and comfort.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              
              <button className="group px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black flex items-center gap-2 shadow-lg shadow-emerald-500/30">
                Shop Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="px-7 py-4 rounded-xl border border-white/20 hover:border-emerald-400 hover:bg-white/5 transition-all duration-300 font-medium">
                Explore Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
              <div>
                <h3 className="text-2xl font-bold">15K+</h3>
                <p className="text-gray-400 text-sm">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">120+</h3>
                <p className="text-gray-400 text-sm">Premium Brands</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">4.9★</h3>
                <p className="text-gray-400 text-sm">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            
            {/* Main Card */}
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>

              {/* Image Container */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
                  alt="Fashion"
                  className="w-full h-[500px] object-cover"
                />

                {/* Floating Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  
                  <div>
                    <h4 className="font-semibold text-lg">
                      Premium Collection
                    </h4>
                    <p className="text-sm text-gray-300">
                      Starting from ₹999
                    </p>
                  </div>

                  <button className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black hover:scale-110 transition">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>

              {/* Floating Small Cards */}
              <div className="absolute -top-6 -left-6 hidden sm:flex bg-white text-black rounded-2xl p-4 shadow-xl items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500"></div>
                <div>
                  <p className="font-semibold">New Arrival</p>
                  <p className="text-sm text-gray-500">Summer 2026</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-xl items-center gap-3">
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-gray-400">
                    On all orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
