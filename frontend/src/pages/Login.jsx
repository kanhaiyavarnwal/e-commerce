

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { User, Mail, Lock, ArrowRight, UserPlus, LogIn } from "lucide-react";

export default function Login() {
  const [currentState, setCurrentState] = useState("Login");

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= SUBMIT =================
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (currentState === "Sign Up") {
      handleSignup();
    } else {
      handleLogin();
    }

    // try {
    //   if (currentState === "Sign Up") {
    //     const response = await axios.post("http://localhost:5000/api/user/register",
    //       // `${backendUrl}/api/user/register`,
    //       {
    //         name,
    //         email,
    //         password,
    //       }
    //     );
    //    console.log("res in signup :",response.data)
    //     if (response.data.success) {
    //       setToken(response.data.data);

    //       localStorage.setItem(
    //         "token",
    //         response.data.data
    //       );

    //       toast.success("Account created successfully!");

    //       navigate("/login");
    //     } else {
    //       console.log("error",response.data.message)
    //       toast.error(response.data.message);
    //     }
    //   } else {
    //     const response = await axios.post("http://localhost:5000/api/user/login",
    //       // `${backendUrl}/api/user/login`,
    //       {
    //         email,
    //         password,
    //       }
    //     );
    // console.log("res in login: ",response.data.data)
    //     if (response.data.success) {
    //       setToken(response.data.data);

    //       localStorage.setItem(
    //         "token",
    //         response.data.data
    //       );

    //       toast.success("Login successful!");

    //       navigate("/cart");
    //     } else {
    //       toast.error(response.data);
    //     }
    //   }
    // } catch (error) {
    //   console.log(error.message);

    //   toast.error(
    //     error.response?.data?.message

    //   );
    // } finally {
    //   setLoading(false);
    // }
  };
  const handleSignup = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/user/register`, {
        name,
        email,
        password,
      });
      // console.log("response in signup :", response.data);
      if (response.data.success) {
        toast.success(response.data.message || "Account created successfully ");
        localStorage.setItem("token", response.data.data);
        setToken(response.data.data);
        navigate("/");
      }
    } catch (err) {
      console.log("error: ", err.message);
      
        toast.error(err.response?.data?.message || "signup failed");
      
    }
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, {
        email,
        password,
      });

      if (response.data.success) {
        const token = response.data.data;

        setToken(token);

        localStorage.setItem("token", token);

        toast.success(response.data.message || "Login successful");

        navigate("/cart");
      }
    } catch (err) {
      console.log("Login error:", err.message);
      toast.error(err.response?.data.message || "login failed");
    }
  };

  // ================= TOKEN CHECK =================
  useEffect(() => {
    if (token) {
      navigate("/cart");
    }
  }, [token, navigate]);

  // ================= TOGGLE MODE =================
  const toggleState = () => {
    setCurrentState(currentState === "Login" ? "Sign Up" : "Login");

    // Clear fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        {/* ================= CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 sm:p-8 md:p-10">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full">
                {currentState === "Login" ? (
                  <LogIn size={21} />
                ) : (
                  <UserPlus size={21} />
                )}
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              {currentState === "Login" ? "Welcome Back" : "Create Account"}  
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              {currentState === "Login"
                ? "Sign in to continue to your account"
                : "Create your account and start shopping"}
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
            {/* NAME */}
            {currentState === "Sign Up" && (
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full pl-11 pr-4 py-3
                             border border-gray-300
                             rounded-sm
                             text-sm text-gray-800
                             placeholder:text-gray-400
                             outline-none
                             focus:border-black
                             transition-colors duration-300"
                />
              </div>
            )}

            {/* EMAIL */}
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-11 pr-4 py-3
                           border border-gray-300
                           rounded-sm
                           text-sm text-gray-800
                           placeholder:text-gray-400
                           outline-none
                           focus:border-black
                           transition-colors duration-300"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
                minLength={6}
                className="w-full pl-11 pr-4 py-3
                           border border-gray-300
                           rounded-sm
                           text-sm text-gray-800
                           placeholder:text-gray-400
                           outline-none
                           focus:border-black
                           transition-colors duration-300"
              />
            </div>

            {/* ================= OPTIONS ================= */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <button
                type="button"
                onClick={() =>
                  toast.info("Password reset functionality coming soon.")
                }
                className="text-gray-500 hover:text-black transition-colors"
              >
                Forgot password?
              </button>

              <button
                type="button"
                onClick={toggleState}
                className="font-medium text-gray-800 hover:text-black underline underline-offset-4"
              >
                {currentState === "Login" ? "Create Account" : "Login Here"}
              </button>
            </div>

            {/* ================= SUBMIT ================= */}
            <button
              type="submit"
              // disabled={loading}
              className="group w-full
                         flex items-center justify-center gap-3
                         bg-black text-white
                         py-3.5
                         text-sm font-medium
                         rounded-sm
                         hover:bg-gray-800
                         disabled:bg-gray-400
                         disabled:cursor-not-allowed
                         transition-all duration-300"
            >
              { currentState === "Login"
                  ? "SIGN IN"
                  : "CREATE ACCOUNT"}

              {!loading && (
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              )}
            </button>
          </form>

          {/* ================= BOTTOM TEXT ================= */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              {currentState === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={toggleState}
                className="ml-1 font-medium text-gray-900 hover:underline"
              >
                {currentState === "Login" ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>

        {/* ================= SECURITY TEXT ================= */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Your information is securely protected.
        </p>
      </div>
    </section>
  );
}



