import React from "react";
import { FiArrowLeft, FiHash } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../components/useTitle";

const NotFound = () => {
  useTitle("404 Not Found");
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-6 selection:bg-amber-100">
      {/* Background Subtle Detail */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] text-[20vw] font-serif italic text-stone-200/20 select-none">
          404
        </div>
      </div>

      <div className="max-w-xl w-full text-center space-y-12 relative z-10">
        {/* Animated Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full border border-stone-100 flex items-center justify-center bg-white shadow-sm transition-transform hover:rotate-12 duration-500">
            <FiHash className="text-amber-600" size={32} />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 tracking-tighter">
            Volume{" "}
            <span className="italic font-light text-stone-400">Missing</span>
          </h1>
          <p className="text-stone-500 font-sans font-light leading-relaxed max-w-sm mx-auto">
            The page you requested does not exist in our current index. It may
            have been archived or moved to another vault.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-amber-700 transition-all active:scale-95"
          >
            Go to Homepage
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-8 py-4 border border-stone-200 text-stone-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-stone-50 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <FiArrowLeft /> Go Back
          </button>
        </div>

        {/* System Meta */}
        <div className="pt-12">
          <span className="text-[9px] font-mono text-stone-300 uppercase tracking-[0.5em]">
            Error Log // Sector_Null
          </span>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
