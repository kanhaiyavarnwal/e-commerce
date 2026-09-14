import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";
import { ShoppingBag, ArrowRight } from "lucide-react";
export default function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!products.length) {
      return;
    }
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);

  const handleCheckOut = () => {
    if (cartData.length === 0) {
      toast.error("Your Cart is Empty");
      return;
    } else {
      navigate("/place-order");
    }
  };
 
if (cartData.length === 0) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <ShoppingBag
            size={36}
            strokeWidth={1.5}
            className="text-gray-500"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Your Cart is Empty
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-500">
          Looks like you haven't added anything to your cart yet.
          Explore our collection and find something you love.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/collection")}
          className="group mt-7 inline-flex items-center justify-center gap-2
                     bg-black px-6 py-3
                     text-sm font-medium text-white
                     rounded-sm
                     hover:bg-gray-800
                     transition-all duration-300"
        >
          Continue Shopping

          <ArrowRight
            size={17}
            className="transition-transform duration-300
                       group-hover:translate-x-1"
          />
        </button>

      </div>
    </div>
  );
}

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="">
        {cartData.map((item, index) => {
          // console.log("cart in item : ",item)
          const productData = products.find(
            (product) => product._id === item._id,
          );
          // console.log("in cart: ",productData)
          if (!productData) {
            return null;
          }
          // console.log("in cart: ",productData)
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gep-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value),
                      )
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 "
                type="Number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            {/* <button
              onClick={handleCheckOut}
              className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer"
            >
              PROCEED TO CHECKOUT
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
