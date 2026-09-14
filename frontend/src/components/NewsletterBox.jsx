import React from "react";
// import toast from "react-toastify";
import { toast } from "react-toastify";
export default function NewsletterBox() {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    toast.success("Successfully subscribed!");
  };

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Subscribe now & get <span className="text-gray-500">10% off</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
          Subscribe to our newsletter and be the first to know about new
          arrivals, exclusive offers, and special discounts.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-[80%] md:w-[65%] lg:w-[50%]
        mx-auto mt-8 flex items-center
        bg-white border border-gray-300
        rounded-full overflow-hidden
        shadow-sm
        focus-within:border-gray-600
        transition-all duration-300"
      >
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 min-w-0
          px-5 sm:px-6 py-4
          text-sm text-gray-700
          placeholder:text-gray-400
          outline-none bg-transparent"
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className="bg-black text-white
          text-xs sm:text-sm font-medium
          px-6 sm:px-8 md:px-10
          py-4
          hover:bg-gray-800
          active:scale-95
          transition-all duration-300
          whitespace-nowrap"
        >
          SUBSCRIBE
        </button>
      </form>

      {/* Small Text */}
      <p className="text-xs text-gray-400 text-center mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </section>
  );
}
