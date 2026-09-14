

import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* Page Heading */}
      <div className="text-2xl text-center pt-10 border-t border-gray-200">
        <Title text1={"ABOUT"} text2={"US"} />
        <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto px-4">
          Discover who we are, what we believe in, and why thousands of
          customers choose us.
        </p>
      </div>

      {/* About Section */}
      <div className="my-14 flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
          <img
            className="w-full md:max-w-[500px] mx-auto object-cover rounded-lg
            hover:scale-105 transition-transform duration-500"
            src={assets.about_img}  decoding="async" loading="lazy"
            alt="About our company"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600 leading-relaxed">
          <p>
            We are committed to providing high-quality products that combine
            style, comfort, and value. Our goal is to make online shopping
            simple, enjoyable, and accessible for everyone.
          </p>

          <p>
            From carefully selecting our products to delivering them safely to
            your doorstep, we focus on every detail to provide you with the best
            possible shopping experience.
          </p>

          <div>
            <b className="text-gray-900 text-lg block mb-2">Our Mission</b>

            <p>
              Our mission is to create a trusted shopping platform where
              customers can discover great products, enjoy competitive prices,
              and receive exceptional customer service.
            </p>
          </div>

          <button
            className="w-fit px-7 py-3 bg-black text-white text-sm
            hover:bg-gray-800 transition-all duration-300 rounded-md"
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* Why Choose Us Heading */}
      <div className="text-xl py-6 text-center border-t border-gray-200">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <p className="text-sm text-gray-500 mt-2">
          Here's what makes our shopping experience different.
        </p>
      </div>

      {/* Why Choose Us Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 mt-8">
        {/* Card 1 */}
        <div
          className="border border-gray-200 px-8 md:px-10 py-10
          flex flex-col gap-5 rounded-lg
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-300"
        >
          <div
            className="w-12 h-12 flex items-center justify-center
            rounded-full bg-gray-100 text-xl"
          >
            ✓
          </div>

          <b className="text-gray-900 text-lg">Quality Assurance</b>

          <p className="text-gray-600 leading-relaxed">
            We carefully select and inspect our products to ensure that you
            receive reliable and high-quality items every time you shop with us.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="border border-gray-200 px-8 md:px-10 py-10
          flex flex-col gap-5 rounded-lg
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-300"
        >
          <div
            className="w-12 h-12 flex items-center justify-center
            rounded-full bg-gray-100 text-xl"
          >
            ⚡
          </div>

          <b className="text-gray-900 text-lg">Convenience</b>

          <p className="text-gray-600 leading-relaxed">
            Browse products, place your order, and track your delivery with a
            smooth and convenient shopping experience from anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="border border-gray-200 px-8 md:px-10 py-10
          flex flex-col gap-5 rounded-lg
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-300"
        >
          <div
            className="w-12 h-12 flex items-center justify-center
            rounded-full bg-gray-100 text-xl"
          >
            ❤
          </div>

          <b className="text-gray-900 text-lg">Exceptional Customer Service</b>

          <p className="text-gray-600 leading-relaxed">
            Our customers are our priority. We are always here to help and make
            sure your shopping experience is simple and satisfying.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mb-10">
        <NewsletterBox />
      </div>
    </div>
  );
}
