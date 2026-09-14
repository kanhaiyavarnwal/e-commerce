// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'

// export default function Order() {
//   const {products,currency}=useContext(ShopContext)
//   return (
//     <div className='border-t pt-16'>
//      <div className='text-2xl'>
//       <Title text1={'MY'} text2={'ORDERS'}/>
//      </div>
//      <div className=''>
//           {
//             products.slice(1,4).map((item,index)=>(
//               <div key={index} className='border-t py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                   <div className='flex items-start gap-6 text-sm'>
//                     <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
//                     <div>

//                       <p className='text-base font-medium'>{item.name}</p>
//                       <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                         <p className='text-lg'>{currency}{item.price}</p>
//                         <p>Quantity: 1</p>
//                         <p>Size: M</p>
//                       </div>
//                       <p className='mt-2'>Date: <span className='text-gray-400'>25 , jul , 2026</span></p>
//                     </div>
//                   </div>
//                   <div className='md:w-1/2 flex justify-between'>
//                       <div className='flex items-center gap-2'>
//                           <p  className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                           <p className='text-sm md:text-base'>Ready to ship</p>
//                       </div>
//                       <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
//                   </div>

//               </div>
//             ))
//           }
//      </div>
//     </div>
//   )
// }

import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { Package, Truck, MapPin, ChevronRight } from "lucide-react";
import { toast } from "react-toastify";

export default function Order() {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/userOrders`,
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.data.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <section className="w-full border-t border-gray-200 pt-10 sm:pt-14 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-8 sm:mb-10">
          <div className="text-2xl sm:text-3xl">
            <Title text1={"MY"} text2={"ORDERS"} />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            View and track your recent orders.
          </p>
        </div>

        {/* ================= ORDERS ================= */}
        {orderData.length > 0 ? (
          <div className="space-y-5">
            {orderData.map((item, index) => (
              <div
                key={`${item._id}-${item.size}-${index}`}
                className="border border-gray-200 bg-white rounded-sm
                           p-4 sm:p-6
                           hover:border-gray-400
                           transition-all duration-300"
              >
                {/* ================= ORDER TOP ================= */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full">
                      <Package size={17} className="text-gray-800" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Order
                      </p>

                      <p className="text-sm font-medium text-gray-900">
                        #ORD-{1000 + index}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>

                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      Ready to ship
                    </span>
                  </div>
                </div>

                {/* ================= PRODUCT ================= */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-5">
                  {/* PRODUCT INFO */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* IMAGE */}
                    <div className="w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 bg-gray-50 border border-gray-200 overflow-hidden rounded-sm">
                      <img
                        src={item.image?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover
                                   hover:scale-105
                                   transition-transform duration-500"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-500">
                        <p>
                          Price:{" "}
                          <span className="text-gray-900 font-medium">
                            {currency}
                            {item.price}
                          </span>
                        </p>

                        <p>
                          Quantity:{" "}
                          <span className="text-gray-900 font-medium">
                            {item.quantity}
                          </span>
                        </p>

                        <p>
                          Size:{" "}
                          <span className="text-gray-900 font-medium">
                            {item.size}
                          </span>
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-500">
                        Order Date:{" "}
                        <span className="text-gray-400">
                          {new Date(item.date).toDateString()}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* ================= ACTIONS ================= */}
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:min-w-[220px] lg:justify-end">
                    {/* STATUS */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <Truck size={16} />
                      <span>Estimated delivery: 2–4 days</span>
                    </div>

                    {/* TRACK BUTTON */}
                    <button
                      onClick={loadOrderData}
                      className="group flex items-center justify-center gap-2
                                 border border-gray-300
                                 px-5 py-2.5
                                 text-xs sm:text-sm font-medium
                                 text-gray-800
                                 rounded-sm
                                 hover:border-black
                                 hover:bg-black
                                 hover:text-white
                                 transition-all duration-300"
                    >
                      TRACK ORDER
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>

                {/* ================= SHIPPING ================= */}
                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <MapPin size={15} />

                    <span>{item.status}</span>
                  </div>

                  <p className="text-xs text-gray-400">
                    Payment confirmed : {item.paymentMethod}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="min-h-[350px] flex flex-col items-center justify-center border border-gray-200 rounded-sm bg-white text-center px-6">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-5">
              <Package size={26} className="text-gray-600" />
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              No Orders Yet
            </h2>

            <p className="text-sm text-gray-500 mt-2 max-w-sm">
              You haven't placed any orders yet. Start shopping and your orders
              will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
