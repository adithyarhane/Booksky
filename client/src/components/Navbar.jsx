import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiBook,
  FiHeart,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";
import { useUIContext } from "../context/UIContext";
import { useAuthContext } from "../context/AuthContext";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import { useCartContext } from "../context/CartContext";
import { useBookContext } from "../context/BookContext";

const Navbar = () => {
  const { isLoggedIn } = useAuthContext();
  const { navLinks, setIsSidebarOpen } = useUIContext();
  const { search, setSearch, setIsSearchOpen, isSearchOpen } = useBookContext();
  const { cartData } = useCartContext();

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-1000 transition-all duration-500 ${isScrolled ? "py-2" : "py-5"}`}
      >
        <div className="container mx-auto px-4 relative">
          <div
            className={`relative z-20 flex items-center justify-between px-6 h-16 md:h-20 rounded-xl border-b-2 border-[#3E2723]/10 transition-all duration-500 ${
              isScrolled ? "bg-[#FCF9F2] shadow-xl" : "bg-white shadow-md"
            }`}
          >
            {/* 1. LOGO & DESKTOP LINKS */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                {/* <FiBook size={24} className="text-[#3E2723]" /> */}
                <div>
                  <img
                    className="w-8"
                    src="https://res.cloudinary.com/df7nkydkq/image/upload/v1769506491/Gemini_Generated_Image_sl8lypsl8lypsl8l-removebg-preview_w2f8tp.png"
                    alt="log"
                  />
                </div>
                <span className="text-xl font-serif font-bold text-[#3E2723]">
                  Deer<span className="text-[#A1887F]">Books</span>
                </span>
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  onClick={() => scrollTo(0, 0)}
                  key={link.name}
                  to={link.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                    location.pathname === link.href
                      ? "text-[#3E2723] border-b border-[#3E2723]"
                      : "text-[#8D6E63] hover:text-[#3E2723]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 2. UTILITY & AUTH ACTIONS */}
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Search Toggle (Always visible) */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#3E2723] hover:bg-stone-100 rounded-lg transition-colors"
              >
                {isSearchOpen ? <FiX size={20} /> : <FiSearch size={22} />}
              </button>

              {isLoggedIn && (
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to="/wishlist"
                  className="relative p-2 text-[#3E2723]"
                >
                  <FiHeart size={22} />
                </Link>
              )}

              {/* Shopping Bag (Always visible) */}
              {isLoggedIn && (
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to="/cart"
                  className="relative p-2 text-[#3E2723]"
                >
                  <FiShoppingBag size={22} />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#3E2723] text-[8px] text-white rounded-full flex items-center justify-center font-bold">
                    {cartData ? cartData.items.length : "0"}
                  </span>
                </Link>
              )}

              {/* DESKTOP ONLY AUTH (Hidden on small screens) */}
              <div className="hidden md:flex items-center gap-4 ml-2 pl-4 border-l border-stone-200">
                {!isLoggedIn ? (
                  <>
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to="/login"
                      className="text-[11px] font-bold uppercase tracking-widest text-[#3E2723] hover:opacity-70"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to="/signup"
                      className="px-6 py-2.5 bg-[#3E2723] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#5D4037] transition-all shadow-md"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <UserMenu />
                )}
              </div>

              {/* MOBILE MENU TOGGLE (Shown on small screens) */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-[#3E2723] ml-1"
              >
                <FiMenu size={28} />
              </button>
            </div>
          </div>

          {/* COMPACT SEARCH DROPDOWN */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-full max-w-lg transition-all duration-300 origin-top ${isSearchOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <div className="bg-white border-2 border-[#3E2723]/5 shadow-2xl rounded-xl p-3 mx-4">
              <div className="relative">
                <input
                  defaultValue={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search the collection..."
                  className="w-full h-12 bg-[#FAF7F2] rounded-lg pl-4 pr-12 text-[#3E2723] focus:outline-none"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3E2723]" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <MobileMenu />
    </>
  );
};

export default Navbar;
