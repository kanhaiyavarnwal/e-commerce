import React from "react";
import { ArrowRight, ShoppingBag, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50 overflow-hidden">
      {/* ================= HERO CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            min-h-[600px]
            lg:min-h-[680px]
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
            py-12
            sm:py-16
            lg:py-20
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              flex
              flex-col
              items-center
              lg:items-start
              text-center
              lg:text-left
              gap-6
              order-2
              lg:order-1
            "
          >
            {/* Small Top Line */}
            <div className="flex items-center gap-3">
              <span className="w-8 sm:w-10 h-[1px] bg-gray-800"></span>

              <p
                className="
                  text-xs
                  sm:text-sm
                  tracking-[0.2em]
                  font-medium
                  text-gray-700
                "
              >
                OUR BEST COLLECTION
              </p>

              <span className="w-8 sm:w-10 h-[1px] bg-gray-800"></span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-medium
                  text-gray-900
                  leading-[1.05]
                  tracking-tight
                "
              >
                Discover Your
              </h1>

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-semibold
                  text-gray-900
                  leading-[1.05]
                  tracking-tight
                "
              >
                Perfect Style
              </h1>
            </div>

            {/* Description */}
            <p
              className="
                max-w-xl
                text-sm
                sm:text-base
                text-gray-500
                leading-7
              "
            >
              Explore our latest collection of premium fashion, modern
              accessories, and everyday essentials. Find quality products
              designed to bring style and comfort to your everyday life.
            </p>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                gap-3
                w-full
                sm:w-auto
                pt-2
              "
            >
              {/* Shop Now */}
              <Link
                to="/collection"
                className="
                  group
                  w-full
                  sm:w-auto
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-black
                  text-white
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  rounded-sm
                  hover:bg-gray-800
                  transition-all
                  duration-300
                "
              >
                SHOP NOW
                <ArrowRight
                  size={17}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                />
              </Link>

              {/* Explore */}
              <Link
                to="/collection"
                className="
                  w-full
                  sm:w-auto
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-gray-300
                  bg-white
                  text-gray-800
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  rounded-sm
                  hover:border-black
                  transition-all
                  duration-300
                "
              >
                EXPLORE COLLECTION
              </Link>
            </div>

            {/* ================= FEATURES ================= */}
            <div
              className="
                w-full
                border-t
                border-gray-200
                mt-5
                pt-6
                grid
                grid-cols-3
                gap-3
                sm:gap-6
              "
            >
              {/* Customers */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <Star size={18} className="text-gray-700" />
                </div>

                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  15K+
                </p>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  Happy Customers
                </p>
              </div>

              {/* Brands */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <ShoppingBag size={18} className="text-gray-700" />
                </div>

                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  120+
                </p>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  Premium Products
                </p>
              </div>

              {/* Shipping */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <Truck size={18} className="text-gray-700" />
                </div>

                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  FREE
                </p>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  Fast Shipping
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              relative
              flex
              justify-center
              order-1
              lg:order-2
            "
          >
            {/* Image Wrapper */}
            <div
              className="
                relative
                w-full
                max-w-md
                sm:max-w-lg
                lg:max-w-xl
              "
            >
              {/* Main Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-gray-200
                  rounded-sm
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
                  alt="Premium fashion collection" loading="lazy" decoding="async"
                  className="
                    w-full
                    h-[420px]
                    sm:h-[520px]
                    lg:h-[600px]
                    object-cover
                    object-center
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />

                {/* Product Information */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                    bg-white/95
                    backdrop-blur-sm
                    p-4
                    sm:p-5
                    flex
                    items-center
                    justify-between
                    shadow-lg
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        text-gray-500
                        uppercase
                        tracking-wider
                        mb-1
                      "
                    >
                      Featured Collection
                    </p>

                    <h3
                      className="
                        text-sm
                        sm:text-lg
                        font-medium
                        text-gray-900
                      "
                    >
                      Premium Collection
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Starting from ₹999
                    </p>
                  </div>

                  <Link
                    to="/collection"
                    className="
                      w-10
                      h-10
                      sm:w-12
                      sm:h-12
                      flex
                      items-center
                      justify-center
                      bg-black
                      text-white
                      rounded-full
                      hover:bg-gray-800
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                    aria-label="Shop collection"
                  >
                    <ShoppingBag size={18} />
                  </Link>
                </div>
              </div>

              {/* ================= NEW ARRIVAL CARD ================= */}
              <div
                className="
                  hidden
                  sm:flex
                  absolute
                  -top-5
                  -left-5
                  lg:-left-8
                  bg-white
                  border
                  border-gray-200
                  px-4
                  py-3
                  items-center
                  gap-3
                  shadow-lg
                  rounded-sm
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                    rounded-full animate-spin 
                  "
                >
                  <Star size={15} className="fill-white" />
                </div>

                <div className="animate-bounce">
                  <p className="text-sm font-medium text-gray-900">
                    New Arrival
                  </p>

                  <p className="text-xs text-gray-500">Summer Collection</p>
                </div>
              </div>

              {/* ================= SHIPPING CARD ================= */}
              <div
                className="
                  hidden
                  sm:flex
                  absolute
                  -bottom-5
                  -right-5
                  lg:-right-8
                  bg-black
                  text-white
                  px-4
                  py-3
                  items-center
                  gap-3
                  shadow-lg
                  rounded-sm animate-bounce
                "
              >
                <Truck size={20} />

                <div>
                  <p className="text-sm font-medium">Free Shipping</p>

                  <p className="text-xs text-gray-400">On all orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
