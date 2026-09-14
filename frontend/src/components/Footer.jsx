// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'
// export default function Footer() {
//   return (
//     <div className=''>
//          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
//             <div>
//                <img src={assets.logo} className='mb-5 w-32' alt=""  />
//                <p className='w-full md:w2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos repellendus consequatur nemo iusto, saepe fugit ducimus? Temporibus molestias aut modi! Quasi sapiente consequuntur nisi, amet quaerat molestiae eveniet quas ab?</p>
//             </div>

//             <div className=''>
//             <p className='text-xl font-medium mb-5 '>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li> <Link to="/">Home</Link></li>
//                 <li> <Link to="/about">About us</Link></li>
//                 <li>Dilevery</li>
//                 <li>Privacy policy</li>

//             </ul>
//             </div>

//             <div className=''>
//                 <p className='text-xl font-md mb-5'>GET IN TOUCH</p>
//                 <ul className='flex flex-col gap-1 text-gray-600'>
//                     <li>+91-875412596</li>
//                     <li>shiv@gmail.com</li>

//                 </ul>
//             </div>
//             </div>

//             <div>
//                 <hr />
//                 <p className='py-5 text-sm text-center '>Copyright 2026@ shiv@.com  - All Right Reserves </p>

//                 </div>

//         </div>
//   )
// }

// import React from "react";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="mt-20 border-t border-gray-200 bg-white">

//       {/* Main Footer */}
//       <div
//         className="
//           max-w-7xl
//           mx-auto
//           px-4
//           sm:px-6
//           lg:px-8
//           py-12
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-[3fr_1fr_1fr]
//           gap-10
//           lg:gap-16
//         "
//       >

//         {/* Company Info */}
//         <div>
//           <img
//             src={assets.logo}
//             className="w-32 mb-5 object-contain"
//             alt="Company Logo"
//           />

//           <p
//             className="
//               max-w-xl
//               text-sm
//               leading-6
//               text-gray-500
//             "
//           >
//             Discover quality products at great prices. We are committed to
//             providing you with a simple, reliable, and enjoyable shopping
//             experience from browsing to delivery.
//           </p>
//         </div>

//         {/* Company Links */}
//         <div>
//           <h3 className="text-base font-semibold text-gray-900 mb-5">
//             COMPANY
//           </h3>

//           <ul className="flex flex-col gap-3 text-sm text-gray-500">

//             <li>
//               <Link
//                 to="/"
//                 className="
//                   hover:text-black
//                   transition-colors
//                   duration-200
//                 "
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/about"
//                 className="
//                   hover:text-black
//                   transition-colors
//                   duration-200
//                 "
//               >
//                 About Us
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/delivery"
//                 className="
//                   hover:text-black
//                   transition-colors
//                   duration-200
//                 "
//               >
//                 Delivery
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/privacy-policy"
//                 className="
//                   hover:text-black
//                   transition-colors
//                   duration-200
//                 "
//               >
//                 Privacy Policy
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-base font-semibold text-gray-900 mb-5">
//             GET IN TOUCH
//           </h3>

//           <ul className="flex flex-col gap-3 text-sm text-gray-500">

//             <li>
//               <a
//                 href="tel:+91875412596"
//                 className="hover:text-black transition-colors duration-200"
//               >
//                 +91 87541 2596
//               </a>
//             </li>

//             <li>
//               <a
//                 href="mailto:shiv@gmail.com"
//                 className="hover:text-black transition-colors duration-200"
//               >
//                 shiv@gmail.com
//               </a>
//             </li>

//           </ul>
//         </div>

//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-gray-200">

//         <div
//           className="
//             max-w-7xl
//             mx-auto
//             px-4
//             sm:px-6
//             lg:px-8
//           "
//         >
//           <p className="py-5 text-xs sm:text-sm text-center text-gray-500">
//             © 2026 Shiv.com — All Rights Reserved.
//           </p>
//         </div>

//       </div>

//     </footer>
//   );
// }

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-12
          sm:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            lg:gap-16
          "
        >
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src={assets.logo}
                alt="Company Logo"
                className="
                  w-28
                  sm:w-32
                  mb-5
                  object-contain
                "
              />
            </Link>

            <p
              className="
                max-w-lg
                text-sm
                text-gray-500
                leading-7
              "
            >
              Discover quality products at great prices. We are committed to
              providing you with a simple, reliable, and enjoyable shopping
              experience from browsing to delivery.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  border
                  border-gray-200
                  rounded-full
                  text-gray-500
                  hover:bg-black
                  hover:text-white
                  hover:border-black
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  border
                  border-gray-200
                  rounded-full
                  text-gray-500
                  hover:bg-black
                  hover:text-white
                  hover:border-black
                  transition-all
                  duration-300
                "
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  border
                  border-gray-200
                  rounded-full
                  text-gray-500
                  hover:bg-black
                  hover:text-white
                  hover:border-black
                  transition-all
                  duration-300
                "
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                tracking-wider
                text-gray-900
                mb-5
              "
            >
              COMPANY
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <Link
                  to="/"
                  className="
                    hover:text-black
                    transition-colors
                    duration-200
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    hover:text-black
                    transition-colors
                    duration-200
                  "
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/collection"
                  className="
                    hover:text-black
                    transition-colors
                    duration-200
                  "
                >
                  Collection
                </Link>
              </li>

              <li>
                <Link
                  to="/delivery"
                  className="
                    hover:text-black
                    transition-colors
                    duration-200
                  "
                >
                  Delivery
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="
                    hover:text-black
                    transition-colors
                    duration-200
                  "
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= GET IN TOUCH ================= */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                tracking-wider
                text-gray-900
                mb-5
              "
            >
              GET IN TOUCH
            </h3>

            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-gray-700" />

                <a
                  href="tel:+91875412596"
                  className="hover:text-black transition-colors"
                >
                  +91 87541 2596
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-gray-700" />

                <a
                  href="mailto:shiv@gmail.com"
                  className="hover:text-black transition-colors"
                >
                  shiv@gmail.com
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gray-700" />

                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-gray-200">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-5
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-3
          "
        >
          <p
            className="
              text-xs
              sm:text-sm
              text-gray-500
              text-center
              sm:text-left
            "
          >
            © 2026 Shiv.com — All Rights Reserved.
          </p>

          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              text-gray-500
              hover:text-black
              transition-colors
              duration-200
            "
          >
            Back to top
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
