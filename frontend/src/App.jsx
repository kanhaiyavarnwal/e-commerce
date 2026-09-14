import React from "react";
import { lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection";
import { ToastContainer, toast } from "react-toastify";

const Home = lazy(()=>import("./pages/Home"))
const About = lazy(()=>import("./pages/About"))
const Contact = lazy(()=>import("./pages/Contact")) 
const Product = lazy(()=>import("./pages/Product"))
const Cart = lazy(()=>import("./pages/Cart"))
const Login = lazy(()=>import("./pages/Login"))
const PlaceOrder = lazy(()=>import("./pages/PlaceOrder"))
const Order = lazy(()=>import("./pages/Order"))

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Verify from "./pages/Verify";
import Profile from "./pages/Profile";
export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw]  lg:px-[9vw]">
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/place-order"
          element={
            <ProtectedRoute>
              <PlaceOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verify"
          element={
            <ProtectedRoute>
              <Verify />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
