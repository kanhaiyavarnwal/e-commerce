// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// export default function Contact() {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t '>
//         <Title text1={'CONTACT'} text2={'US'}/>
//         </div>

//         <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className='text-gray-500 '>828345 Bankmore <br /> Dhanbad , Jharkhand </p>
//           <p className='text-gray-500 '>Tel: +91 6204587896  <br /> Email: ecommerce@gmail.com</p>
//           <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
//           <p className='text-gray-500'>Learn more about our teams and Job opening .</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

//         </div>
//         </div>
//         <NewsletterBox/>
//         </div>
//   )
// }

import React from "react";
import { Mail, MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

export default function Contact() {
  return (
    <div className="w-full">
      {/* ================= HEADER ================= */}
      <section className="border-t border-gray-200 pt-10 sm:pt-12">
        <div className="text-center px-4">
          <div className="text-2xl sm:text-3xl">
            <Title text1={"CONTACT"} text2={"US"} />
          </div>

          <p className="max-w-2xl mx-auto mt-4 text-sm text-gray-500 leading-6">
            Have a question, need help with your order, or want to work with us?
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="my-12 sm:my-16 lg:my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* IMAGE */}
            <div className="overflow-hidden border border-gray-200 rounded-sm">
              <img
                src={assets.contact_img}
                alt="Contact our store" loading="lazy"  decoding="async"
                className="w-full h-[350px] sm:h-[450px] lg:h-[520px]
                           object-cover
                           hover:scale-105
                           transition-transform duration-700"
              />
            </div>

            {/* CONTACT INFORMATION */}
            <div className="flex flex-col gap-7">
              {/* STORE */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center
                                  bg-gray-100 rounded-full"
                  >
                    <MapPin size={18} className="text-gray-800" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Our Store
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-gray-500 leading-7">
                  828345 Bankmore
                  <br />
                  Dhanbad, Jharkhand, India
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* PHONE */}
                <a
                  href="tel:+916204587896"
                  className="group flex items-center gap-4
                             border border-gray-200
                             p-4 rounded-sm
                             hover:border-gray-400
                             transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center
                                  bg-gray-50 rounded-full"
                  >
                    <Phone size={17} className="text-gray-800" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">CALL US</p>
                    <p className="text-sm font-medium text-gray-800">
                      +91 62045 87896
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:ecommerce@gmail.com"
                  className="group flex items-center gap-4
                             border border-gray-200
                             p-4 rounded-sm
                             hover:border-gray-400
                             transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center
                                  bg-gray-50 rounded-full"
                  >
                    <Mail size={17} className="text-gray-800" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-1">EMAIL US</p>
                    <p className="text-sm font-medium text-gray-800 truncate">
                      ecommerce@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* BUSINESS HOURS */}
              <div className="border-y border-gray-200 py-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center
                                  bg-gray-100 rounded-full"
                  >
                    <Clock size={17} className="text-gray-800" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>

                    <p className="text-sm text-gray-500 leading-6">
                      Monday - Saturday: 9:00 AM - 8:00 PM
                      <br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* CAREERS */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  Careers at Our Store
                </h2>

                <p className="text-sm text-gray-500 leading-6 mb-5">
                  Interested in joining our team? Explore our available
                  opportunities and become part of our growing company.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      "mailto:ecommerce@gmail.com?subject=Job Application",
                      "_blank",
                    )
                  }
                  className="group inline-flex items-center gap-3
                             bg-black text-white
                             px-6 sm:px-8 py-3.5
                             text-sm font-medium
                             rounded-sm
                             hover:bg-gray-800
                             transition-all duration-300"
                >
                  EXPLORE JOBS
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>

              {/* MAP BUTTON */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bankmore,Dhanbad,Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           border border-gray-300
                           bg-white text-gray-800
                           px-6 py-3.5
                           text-sm font-medium
                           rounded-sm
                           hover:border-black
                           transition-all duration-300"
              >
                <MapPin size={17} />
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <NewsletterBox />
    </div>
  );
}
