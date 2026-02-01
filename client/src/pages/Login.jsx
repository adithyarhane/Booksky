import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";
import { useAuthContext } from "../context/AuthContext";
import useTitle from "../components/useTitle";
import { useCartContext } from "../context/CartContext";

const Login = () => {
  useTitle("Login");

  const { login, email, setEmail, isLoading } = useAuthContext();
  const { getCart } = useCartContext();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full flex bg-[#FCF9F2] font-serif">
      {/* 1. LEFT PANEL: CINEMATIC ART (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#1A0F0B]">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000"
          alt="Vintage Library"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0F0B] via-transparent to-transparent" />

        <div className="relative z-10 self-end p-16">
          <div className="flex items-center gap-3 mb-6">
            <FiBookOpen className="text-amber-500" size={24} />
            <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">
              The Archive Edition
            </span>
          </div>
          <h2 className="text-6xl text-white leading-tight mb-6">
            Welcome back to <br />
            <span className="italic font-light">The Sanctuary.</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-md font-sans">
            "A room without books is like a body without a soul."
            <span className="block mt-2 text-amber-500/80 italic">
              — Marcus Tullius Cicero
            </span>
          </p>
        </div>
      </div>

      {/* 2. RIGHT PANEL: LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          {/* Logo / Mobile Branding */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-8 lg:hidden"
            >
              <FiBookOpen className="text-[#3E2723]" size={20} />
              <span className="font-bold text-[#3E2723] uppercase tracking-widest text-sm">
                BookSky
              </span>
            </Link>
            <h1 className="text-4xl text-[#3E2723] mb-3 font-serif">Sign In</h1>
            <p className="text-[#A1887F] font-sans text-sm">
              Please enter your credentials to access your collection.
            </p>
          </div>

          <form
            onSubmit={(e) => login(e, email, password, getCart)}
            className="space-y-6"
          >
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#3E2723]/60 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#A1887F]">
                  <FiMail size={18} />
                </div>
                <input
                  defaultValue={email} // Using value for controlled component
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="w-full bg-white border border-[#3E2723]/10 py-4 pl-12 pr-4 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all font-sans text-sm shadow-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#3E2723]/60">
                  Password
                </label>
                <Link
                  to="/reset-password"
                  className="text-[10px] uppercase font-bold text-amber-700 hover:text-amber-500"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#A1887F]">
                  <FiLock size={18} />
                </div>
                <input
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full bg-white border border-[#3E2723]/10 py-4 pl-12 pr-12 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all font-sans text-sm shadow-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#A1887F] hover:text-[#3E2723]"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 px-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-[#3E2723] border-[#3E2723]/20 rounded cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-xs font-sans text-[#5D4037] cursor-pointer"
              >
                Keep me signed in for 30 days
              </label>
            </div>

            {/* Submit Button with Loading State */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[#3E2723] hover:bg-[#5D4037] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-950/20 active:scale-[0.98] ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Enter The Archive
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>

          {/* Bottom Link */}
          <div className="mt-10 text-center">
            <p className="text-sm font-sans text-[#A1887F]">
              Not a member yet?{" "}
              <Link
                to="/signup"
                className="text-[#3E2723] font-bold border-b border-[#3E2723]/20 hover:border-[#3E2723] transition-all pb-0.5"
              >
                Join the Society
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
