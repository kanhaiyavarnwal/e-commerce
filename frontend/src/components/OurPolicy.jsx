

import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

export default function OurPolicy() {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      description: "We offer a hassle-free exchange policy",
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      description: "Easy returns within 7 days",
    },
    {
      icon: assets.support_img,
      title: "Best Customer Support",
      description: "We provide 24/7 customer support",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-3xl py-2">
          <Title text1={"OUR"} text2={"POLICY"} />
        </div>

        {/* Policy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center
                         border border-gray-200 bg-white
                         px-6 py-8 sm:py-10
                         rounded-sm
                         hover:border-gray-400
                         hover:shadow-md
                         transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center
                              bg-gray-50 rounded-full mb-5
                              group-hover:bg-gray-100
                              transition-colors duration-300"
              >
                <img
                  src={policy.icon}
                  className="w-10 h-10 object-contain
                             group-hover:scale-105
                             transition-transform duration-300"
                  alt={policy.title}
                />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                {policy.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-6 max-w-xs">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
