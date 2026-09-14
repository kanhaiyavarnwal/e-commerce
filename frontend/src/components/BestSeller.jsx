import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function BestSeller() {
  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) {
      setBestSeller([]);
      return;
    }

    const bestProducts = products.filter((item) => item.bestseller === true);

    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <section className="my-16 sm:my-20">
      {/* ================= SECTION HEADER ================= */}
      <div className="text-center mb-10">
        <div className="text-2xl sm:text-3xl mb-4">
          <Title text1={"BEST"} text2={"SELLERS"} />
        </div>

        <p
          className="
            max-w-2xl
            mx-auto
            px-4
            text-xs
            sm:text-sm
            md:text-base
            text-gray-500
            leading-6
          "
        >
          Discover our best-selling products, carefully selected for quality,
          style, and everyday comfort.
        </p>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      {bestSeller.length > 0 ? (
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-x-4
            sm:gap-x-5
            lg:gap-x-6
            gap-y-8
          "
        >
          {bestSeller.map((item) => (
            <div
              key={item._id}
              className="
                group
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      ) : (
        /* ================= EMPTY STATE ================= */
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            py-16
            border
            border-gray-200
            rounded-sm
          "
        >
          <div
            className="
              w-14
              h-14
              flex
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-gray-500
              text-xl
              mb-4
            "
          >
            🛍️
          </div>

          <p className="text-sm text-gray-500">
            No best-selling products available.
          </p>
        </div>
      )}
    </section>
  );
}
