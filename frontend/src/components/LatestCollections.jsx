import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function LatestCollections() {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    } else {
      setLatestProducts([]);
    }
  }, [products]);

  return (
    <section className="my-16 sm:my-20">
      {/* ================= SECTION HEADER ================= */}
      <div className="text-center mb-10">
        <div className="text-2xl sm:text-3xl mb-4">
          <Title text1={"LATEST"} text2={"COLLECTION"} />
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
          Welcome to our amazing e-commerce store. Explore our latest collection
          and discover products made for your style and comfort.
        </p>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      {latestProducts.length > 0 ? (
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
          {latestProducts.map((item) => (
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
            No products available at the moment.
          </p>
        </div>
      )}
    </section>
  );
}
