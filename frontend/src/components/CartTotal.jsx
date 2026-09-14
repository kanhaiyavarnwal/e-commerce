import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

export default function CartTotal() {
  const { currency, dilevery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + dilevery_fee;

  return (
    <div className="w-full max-w-md ml-auto">
      {/* ================= HEADING ================= */}
      <div className="text-2xl sm:text-3xl mb-6">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      {/* ================= TOTAL CARD ================= */}
      <div
        className="
          w-full
          border
          border-gray-200
          bg-white
          rounded-sm
          p-5
          sm:p-6
        "
      >
        {/* Subtotal */}
        <div
          className="
            flex
            justify-between
            items-center
            py-3
            text-sm
          "
        >
          <p className="text-gray-500">Subtotal</p>

          <p className="font-medium text-gray-900">
            {currency}
            {subtotal}.00
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Shipping Fee */}
        <div
          className="
            flex
            justify-between
            items-center
            py-3
            text-sm
          "
        >
          <div>
            <p className="text-gray-500">Shipping Fee</p>

            <p className="text-[11px] text-gray-400 mt-1">Standard delivery</p>
          </div>

          <p className="font-medium text-gray-900">
            {currency}
            {dilevery_fee}.00
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Total */}
        <div
          className="
            flex
            justify-between
            items-center
            pt-5
          "
        >
          <div>
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Total
            </p>

            <p className="text-xs text-gray-400 mt-1">Inclusive of shipping</p>
          </div>

          <p className="text-lg sm:text-xl font-semibold text-gray-900">
            {currency}
            {total}.00
          </p>
        </div>
      </div>

      {/* ================= CHECKOUT ================= */}
      {subtotal > 0 && (
        <Link
          to="/place-order"
          className="
            group
            w-full
            mt-5
            flex
            items-center
            justify-center
            gap-2
            bg-black
            text-white
            py-3.5
            sm:py-4
            px-6
            rounded-sm
            text-xs
            sm:text-sm
            font-medium
            tracking-wide
            hover:bg-gray-800
            active:scale-[0.98]
            transition-all
            duration-300
          "
        >
          PROCEED TO CHECKOUT
          <span
            className="
              group-hover:translate-x-1
              transition-transform
              duration-300
            "
          >
            →
          </span>
        </Link>
      )}
    </div>
  );
}
