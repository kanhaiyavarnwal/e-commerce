import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { setShowSearch, getCartCount, navigate, token, setToken } =
    useContext(ShopContext);

  /* =====================================================
                        LOGOUT
  ===================================================== */

  const logOut = () => {
    localStorage.removeItem("token");

    setToken("");

    setProfileOpen(false);
    setVisible(false);

    navigate("/login");
  };

  /* =====================================================
                    DESKTOP NAV LINK
  ===================================================== */

  const navLinkStyle = ({ isActive }) =>
    `
      relative
      flex
      h-full
      items-center
      justify-center
      whitespace-nowrap
      text-[11px]
      font-medium
      tracking-[0.12em]
      transition-colors
      duration-200

      ${isActive ? "text-black" : "text-gray-500 hover:text-black"}
    `;

  /* =====================================================
                    MOBILE NAV LINK
  ===================================================== */

  const mobileNavLinkStyle = ({ isActive }) =>
    `
      flex
      min-h-[56px]
      items-center
      border-b
      border-gray-100
      px-5
      text-xs
      font-medium
      tracking-[0.12em]
      transition-colors
      duration-200

      sm:px-7
      sm:text-sm

      ${
        isActive
          ? "bg-gray-50 text-black"
          : "text-gray-600 hover:bg-gray-50 hover:text-black"
      }
    `;

  /* =====================================================
                        CLOSE MOBILE
  ===================================================== */

  const closeMobileMenu = () => {
    setVisible(false);
    setProfileOpen(false);
  };

  return (
    <>
      {/* =====================================================
                            NAVBAR
      ===================================================== */}

      <header
        className="
          sticky
          top-0
          z-40
          w-full
          border-b
          border-gray-100
          bg-white/95
          backdrop-blur-md
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between
            px-4

            sm:h-[72px]
            sm:px-6

            lg:h-20
            lg:px-8
          "
        >
          {/* =================================================
                              LOGO
          ================================================= */}

          <Link to="/" className="shrink-0" aria-label="Go to homepage">
            <img
              src={assets.logo}
              alt="Store Logo"
              className="
                block
                w-24
                max-h-10
                object-contain

                sm:w-28
                md:w-32
                lg:w-36
              "
            />
          </Link>

          {/* =================================================
                         DESKTOP NAVIGATION
          ================================================= */}

          <ul
            className="
              hidden
              h-full
              items-center

              md:flex
              md:gap-5

              lg:gap-7

              xl:gap-9
            "
          >
            {/* HOME */}

            <li className="h-full">
              <NavLink to="/" className={navLinkStyle}>
                HOME
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-[1.5px]
                    w-0
                    -translate-x-1/2
                    bg-black
                    transition-all
                    duration-300
                  "
                />
              </NavLink>
            </li>

            {/* COLLECTION */}

            <li className="h-full">
              <NavLink to="/collection" className={navLinkStyle}>
                COLLECTION
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-[1.5px]
                    w-0
                    -translate-x-1/2
                    bg-black
                    transition-all
                    duration-300
                  "
                />
              </NavLink>
            </li>

            {/* ABOUT */}

            <li className="h-full">
              <NavLink to="/about" className={navLinkStyle}>
                ABOUT
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-[1.5px]
                    w-0
                    -translate-x-1/2
                    bg-black
                    transition-all
                    duration-300
                  "
                />
              </NavLink>
            </li>

            {/* CONTACT */}

            <li className="h-full">
              <NavLink to="/contact" className={navLinkStyle}>
                CONTACT
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-[1.5px]
                    w-0
                    -translate-x-1/2
                    bg-black
                    transition-all
                    duration-300
                  "
                />
              </NavLink>
            </li>
          </ul>

          {/* =================================================
                           RIGHT SIDE
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-2

              sm:gap-3
              md:gap-4
              lg:gap-5
            "
          >
            {/* =================================================
                              SEARCH
            ================================================= */}

            <button
              onClick={() => setShowSearch(true)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-gray-600
                transition
                duration-200
                hover:bg-gray-50
                hover:text-black

                sm:h-10
                sm:w-10
              "
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.7} />
            </button>

            {/* =================================================
                              PROFILE
            ================================================= */}

            <div className="relative">
              {token ? (
                <>
                  {/* PROFILE BUTTON */}

                  <button
                    onClick={() => setProfileOpen((prev) => !prev)}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      text-gray-600
                      transition
                      duration-200
                      hover:bg-gray-50
                      hover:text-black

                      sm:h-10
                      sm:w-10
                    "
                    aria-label="Profile"
                    aria-expanded={profileOpen}
                  >
                    <User size={19} strokeWidth={1.7} />
                  </button>

                  {/* =================================================
                              DESKTOP DROPDOWN
                  ================================================= */}

                  {profileOpen && (
                    <div
                      className="
                        absolute
                        right-0
                        top-full
                        z-[100]
                        mt-3
                        w-48
                        overflow-hidden
                        rounded-md
                        border
                        border-gray-200
                        bg-white
                        shadow-xl
                      "
                    >
                      {/* PROFILE */}

                      <Link
                        to="/profile"
                        onClick={() => setProfileOpen(false)}
                        className="
                          flex
                          items-center
                          justify-between
                          px-5
                          py-3
                          text-sm
                          text-gray-600
                          transition
                          hover:bg-gray-50
                          hover:text-black
                        "
                      >
                        <span>My Profile</span>

                        <ChevronDown size={14} className="-rotate-90" />
                      </Link>

                      {/* ORDERS */}

                      <Link
                        to="/orders"
                        onClick={() => setProfileOpen(false)}
                        className="
                          flex
                          items-center
                          justify-between
                          px-5
                          py-3
                          text-sm
                          text-gray-600
                          transition
                          hover:bg-gray-50
                          hover:text-black
                        "
                      >
                        <span>My Orders</span>

                        <ChevronDown size={14} className="-rotate-90" />
                      </Link>

                      {/* LOGOUT */}

                      <button
                        onClick={logOut}
                        className="
                          w-full
                          px-5
                          py-3
                          text-left
                          text-sm
                          text-gray-600
                          transition
                          hover:bg-gray-50
                          hover:text-black
                        "
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                /* LOGIN */

                <button
                  onClick={() => navigate("/login")}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    text-gray-600
                    transition
                    duration-200
                    hover:bg-gray-50
                    hover:text-black

                    sm:h-10
                    sm:w-10
                  "
                  aria-label="Login"
                >
                  <User size={19} strokeWidth={1.7} />
                </button>
              )}
            </div>

            {/* =================================================
                              CART
            ================================================= */}

            <Link
              to="/cart"
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-gray-600
                transition
                duration-200
                hover:bg-gray-50
                hover:text-black

                sm:h-10
                sm:w-10
              "
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} strokeWidth={1.7} />

              {/* CART COUNT */}

              {getCartCount() > 0 && (
                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    px-1
                    text-[9px]
                    font-medium
                    leading-none
                    text-white
                  "
                >
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* =================================================
                         MOBILE MENU BUTTON
            ================================================= */}

            <button
              onClick={() => {
                setVisible(true);
                setProfileOpen(false);
              }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-gray-600
                transition
                duration-200
                hover:bg-gray-50
                hover:text-black

                md:hidden
              "
              aria-label="Open menu"
              aria-expanded={visible}
            >
              <Menu size={22} strokeWidth={1.7} />
            </button>
          </div>
        </nav>
      </header>

      {/* =====================================================
                         MOBILE OVERLAY
      ===================================================== */}

      {visible && (
        <div
          onClick={closeMobileMenu}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-[2px]
            md:hidden
          "
        />
      )}

      {/* =====================================================
                         MOBILE SIDEBAR
      ===================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-dvh
          w-[88%]
          max-w-[380px]
          flex-col
          overflow-hidden
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out

          md:hidden

          ${visible ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* =================================================
                         SIDEBAR HEADER
        ================================================= */}

        <div
          className="
            flex
            h-16
            shrink-0
            items-center
            justify-between
            border-b
            border-gray-200
            px-5

            sm:h-[72px]
            sm:px-7
          "
        >
          {/* LOGO */}

          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={assets.logo}
              alt="Store Logo"
              className="
                w-24
                object-contain

                sm:w-28
              "
            />
          </Link>

          {/* CLOSE BUTTON */}

          <button
            onClick={closeMobileMenu}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              text-gray-600
              transition
              hover:border-black
              hover:text-black
            "
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* =================================================
                         MOBILE CONTENT
        ================================================= */}

        <div className="flex-1 overflow-y-auto">
          {/* HOME */}

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={mobileNavLinkStyle}
          >
            HOME
          </NavLink>

          {/* COLLECTION */}

          <NavLink
            to="/collection"
            onClick={closeMobileMenu}
            className={mobileNavLinkStyle}
          >
            COLLECTION
          </NavLink>

          {/* ABOUT */}

          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className={mobileNavLinkStyle}
          >
            ABOUT
          </NavLink>

          {/* CONTACT */}

          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={mobileNavLinkStyle}
          >
            CONTACT
          </NavLink>

          {/* =================================================
                         MOBILE ACCOUNT
          ================================================= */}

          {token ? (
            <div className="border-b border-gray-100">
              {/* ACCOUNT BUTTON */}

              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="
                  flex
                  min-h-[56px]
                  w-full
                  items-center
                  justify-between
                  px-5
                  text-left
                  text-xs
                  font-medium
                  tracking-[0.12em]
                  text-gray-600
                  transition
                  hover:bg-gray-50
                  hover:text-black

                  sm:px-7
                  sm:text-sm
                "
                aria-expanded={profileOpen}
              >
                <span className="flex items-center gap-3">
                  <User size={18} strokeWidth={1.7} />
                  MY ACCOUNT
                </span>

                <ChevronDown
                  size={18}
                  className={`
                    transition-transform
                    duration-300

                    ${profileOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* =================================================
                         ACCOUNT DROPDOWN
              ================================================= */}

              {profileOpen && (
                <div className="bg-gray-50">
                  {/* MY PROFILE */}

                  <Link
                    to="/profile"
                    onClick={closeMobileMenu}
                    className="
                      flex
                      min-h-[50px]
                      items-center
                      border-t
                      border-gray-100
                      px-9
                      text-xs
                      text-gray-600
                      transition
                      hover:text-black

                      sm:px-11
                      sm:text-sm
                    "
                  >
                    MY PROFILE
                  </Link>

                  {/* MY ORDERS */}

                  <Link
                    to="/orders"
                    onClick={closeMobileMenu}
                    className="
                      flex
                      min-h-[50px]
                      items-center
                      border-t
                      border-gray-100
                      px-9
                      text-xs
                      text-gray-600
                      transition
                      hover:text-black

                      sm:px-11
                      sm:text-sm
                    "
                  >
                    MY ORDERS
                  </Link>

                  {/* LOGOUT */}

                  <button
                    onClick={logOut}
                    className="
                      flex
                      min-h-[50px]
                      w-full
                      items-center
                      border-t
                      border-gray-100
                      px-9
                      text-left
                      text-xs
                      text-gray-600
                      transition
                      hover:text-black

                      sm:px-11
                      sm:text-sm
                    "
                  >
                    LOGOUT
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* =================================================
                              LOGIN
            ================================================= */

            <button
              onClick={() => {
                setVisible(false);
                navigate("/login");
              }}
              className="
                flex
                min-h-[56px]
                w-full
                items-center
                border-b
                border-gray-100
                px-5
                text-left
                text-xs
                font-medium
                tracking-[0.12em]
                text-gray-600
                transition
                hover:bg-gray-50
                hover:text-black

                sm:px-7
                sm:text-sm
              "
            >
              LOGIN
            </button>
          )}
        </div>

        {/* =================================================
                         SIDEBAR FOOTER
        ================================================= */}

        <div
          className="
            shrink-0
            border-t
            border-gray-200
            bg-gray-50
            px-5
            py-5

            sm:px-7
          "
        >
          <p
            className="
              text-center
              text-[10px]
              text-gray-400

              sm:text-xs
            "
          >
            © 2026 Shiv.com
          </p>
        </div>
      </aside>
    </>
  );
}
