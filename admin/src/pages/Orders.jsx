

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
export default function Orders({ token }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // const backendUrl = "http://localhost:5000";

  // ================= FETCH ALL ORDERS =================

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      setLoading(true);

      const response = await axios.post(
        `${backendUrl}/api/order/allProducts`,
        {},
        {
          headers: {
            token: token,
          },
        },
      );

      if (response.data.success) {
        setOrders(response.data.data.reverse() || []);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: e.target.value },
        { headers: { token } },
      );

      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  // ================= STATUS STYLE =================

  const getStatusStyle = (status) => {
    switch (status) {
      case "Order Placed":
        return "bg-gray-100 text-gray-700";

      case "Packing":
        return "bg-yellow-100 text-yellow-700";

      case "Shipped":
        return "bg-blue-100 text-blue-700";

      case "Out for Delivery":
        return "bg-purple-100 text-purple-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // ================= PAYMENT STATUS =================

  const getPaymentStatus = (order) => {
    if (order.payment) {
      return {
        text: "Paid",
        style: "bg-green-100 text-green-700",
      };
    }

    if (order.paymentMethod === "COD") {
      return {
        text: "Cash on Delivery",
        style: "bg-orange-100 text-orange-700",
      };
    }

    return {
      text: "Payment Pending",
      style: "bg-red-100 text-red-700",
    };
  };

  // ================= DATE =================

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mb-8">
          <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />

          <div className="mt-2 h-4 w-64 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-80 animate-pulse rounded-2xl bg-white shadow-sm"
            />
          ))}
        </div>
      </div>
    );
  }

  // ================= PAGE =================

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* ================= PAGE HEADER ================= */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            All Orders
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage customer orders and delivery information
          </p>
        </div>

        <button
          onClick={fetchAllOrders}
          className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 active:scale-95"
        >
          Refresh Orders
        </button>
      </div>

      {/* ================= STATISTICS ================= */}

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total */}

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Orders</p>

          <p className="mt-2 text-3xl font-bold text-gray-800">
            {orders.length}
          </p>
        </div>

        {/* Pending */}

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending</p>

          <p className="mt-2 text-3xl font-bold text-orange-500">
            {
              orders.filter(
                (order) =>
                  order.status !== "Delivered" && order.status !== "Cancelled",
              ).length
            }
          </p>
        </div>

        {/* Delivered */}

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Delivered</p>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {orders.filter((order) => order.status === "Delivered").length}
          </p>
        </div>

        {/* Cancelled */}

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Cancelled</p>

          <p className="mt-2 text-3xl font-bold text-red-500">
            {orders.filter((order) => order.status === "Cancelled").length}
          </p>
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}

      {orders.length === 0 ? (
        <div className="rounded-2xl border border-gray-100 bg-white py-24 text-center shadow-sm">
          <div className="text-6xl">📦</div>

          <h2 className="mt-5 text-xl font-semibold text-gray-700">
            No Orders Found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            There are currently no orders in your store.
          </p>
        </div>
      ) : (
        /* ================= ORDERS ================= */

        <div className="space-y-8">
          {orders.map((order, index) => {
            const address = order.address || {};

            const paymentStatus = getPaymentStatus(order);

            return (
              <div
                key={order._id || index}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                {/* ================= ORDER HEADER ================= */}

                <div className="border-b border-gray-100 p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Order ID */}

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        Order ID
                      </p>

                      <p className="mt-1 break-all text-sm font-bold text-gray-800">
                        #{order._id}
                      </p>
                    </div>

                    {/* Status */}

                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${getStatusStyle(
                          order.status,
                        )}`}
                      >
                        {order.status || "Order Placed"}
                      </span>

                      <span
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${paymentStatus.style}`}
                      >
                        {paymentStatus.text}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ================= CUSTOMER INFORMATION ================= */}

                <div className="border-b border-gray-100 p-5">
                  <h2 className="mb-5 text-lg font-bold text-gray-800">
                    Customer Information
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Name */}

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Customer Name
                      </p>

                      <p className="mt-2 text-sm font-semibold capitalize text-gray-800">
                        {address.firstName || ""} {address.lastName || ""}
                      </p>
                    </div>

                    {/* Email */}

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Email
                      </p>

                      <p className="mt-2 break-all text-sm font-medium text-gray-800">
                        {address.email || "N/A"}
                      </p>
                    </div>

                    {/* Phone */}

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Phone
                      </p>

                      <p className="mt-2 text-sm font-semibold text-gray-800">
                        {address.phone || "N/A"}
                      </p>
                    </div>

                    {/* User ID */}

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Customer ID
                      </p>

                      <p className="mt-2 break-all text-xs font-medium text-gray-700">
                        {order.userId || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* ================= DELIVERY ADDRESS ================= */}

                  <div className="mt-4 rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Delivery Address
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-gray-800">
                      {address.street || "N/A"}

                      {address.city && <>, {address.city}</>}

                      {address.state && <>, {address.state}</>}

                      {address.zipCode && <>- {address.zipCode}</>}

                      {address.country && <>, {address.country}</>}
                    </p>
                  </div>
                </div>

                {/* ================= ORDER DETAILS ================= */}

                <div className="grid grid-cols-1 gap-8 p-5 lg:grid-cols-3">
                  {/* ================= PRODUCTS ================= */}

                  <div className="lg:col-span-2">
                    <h2 className="mb-5 text-lg font-bold text-gray-800">
                      Ordered Products
                    </h2>

                    <div className="space-y-4">
                      {order.items?.length > 0 ? (
                        order.items.map((item, itemIndex) => (
                          <div
                            key={item._id || item.productId || itemIndex}
                            className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center"
                          >
                            {/* Product Image */}

                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
                              {item.image ? (
                                <img
                                  src={item.image}
                                  alt={item.name || "Product"}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center text-3xl">
                                  📦
                                </div>
                              )}
                            </div>

                            {/* Product Information */}

                            <div className="min-w-0 flex-1">
                              <h3 className="text-base font-semibold text-gray-800">
                                {item.name || "Product"}
                              </h3>

                              <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-500">
                                <span>
                                  Quantity:{" "}
                                  <strong className="text-gray-700">
                                    {item.quantity || 1}
                                  </strong>
                                </span>

                                {item.size && (
                                  <span>
                                    Size:{" "}
                                    <strong className="text-gray-700">
                                      {item.size}
                                    </strong>
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Price */}

                            <div className="sm:text-right">
                              <p className="text-lg font-bold text-gray-800">
                                ₹{(item.price || 0).toLocaleString("en-IN")}
                              </p>

                              <p className="text-xs text-gray-400">
                                Product Price
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="rounded-xl bg-gray-50 p-8 text-center text-sm text-gray-500">
                          No product information available.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ================= ORDER SUMMARY ================= */}

                  <div>
                    <h2 className="mb-5 text-lg font-bold text-gray-800">
                      Order Summary
                    </h2>

                    <div className="rounded-xl bg-gray-50 p-5">
                      {/* Date */}

                      <div className="flex justify-between gap-4 border-b border-gray-200 pb-4">
                        <span className="text-sm text-gray-500">
                          Order Date
                        </span>

                        <span className="text-right text-sm font-semibold text-gray-800">
                          {formatDate(order.date)}
                        </span>
                      </div>

                      {/* Payment Method */}

                      <div className="flex justify-between gap-4 border-b border-gray-200 py-4">
                        <span className="text-sm text-gray-500">
                          Payment Method
                        </span>

                        <span className="text-sm font-semibold text-gray-800">
                          {order.paymentMethod || "N/A"}
                        </span>
                      </div>

                      {/* Payment Status */}

                      <div className="flex justify-between gap-4 border-b border-gray-200 py-4">
                        <span className="text-sm text-gray-500">
                          Payment Status
                        </span>

                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${paymentStatus.style}`}
                        >
                          {paymentStatus.text}
                        </span>
                      </div>

                      {/* Items */}

                      <div className="flex justify-between gap-4 border-b border-gray-200 py-4">
                        <span className="text-sm text-gray-500">
                          Total Items
                        </span>

                        <span className="text-sm font-semibold text-gray-800">
                          {order.items?.reduce(
                            (total, item) => total + (item.quantity || 1),
                            0,
                          ) || 0}
                        </span>
                      </div>

                      {/* Total */}

                      <div className="flex items-center justify-between pt-5">
                        <span className="font-bold text-gray-800">
                          Total Amount
                        </span>

                        <span className="text-2xl font-bold text-green-700">
                          ₹{(order.amount || 0).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= ORDER STATUS ================= */}

                <div className="border-t border-gray-100 bg-gray-50 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Order Status
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-800">
                        {order.status || "Order Placed"}
                      </p>
                    </div>

                    <select
                      value={order.status || "Order Placed"}
                      onChange={(e) => {
                        statusHandler(e, order._id);
                        // const newStatus =
                        //   e.target.value;

                        //   setOrders((previousOrders) =>
                        //     previousOrders.map(
                        //       (item) =>
                        //         item._id ===
                        //         order._id
                        //           ? {
                        //               ...item,
                        //               status:
                        //                 newStatus,
                        //             }
                        //           : item
                        //     )
                        //   );

                        //
                      }}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    >
                      <option value="Order Placed">Order Placed</option>

                      <option value="Packing">Packing</option>

                      <option value="Shipped">Shipped</option>

                      <option value="Out for Delivery">Out for Delivery</option>

                      <option value="Delivered">Delivered</option>

                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
