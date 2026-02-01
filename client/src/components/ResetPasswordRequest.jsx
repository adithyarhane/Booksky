import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiArrowLeft, FiArrowRight, FiKey } from "react-icons/fi";
import { useAuthContext } from "../context/AuthContext";

const ResetPasswordRequest = () => {
  const { sendResetOTP, email, setEmail, setIsEmailSent } = useAuthContext();
  return (
    <div className="min-h-screen w-full flex bg-[#FCF9F2] font-serif">
      {/* 1. LEFT PANEL: EDITORIAL ART (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#1A0F0B]">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
          alt="Ancient Library Desk"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#3E2723]/60 to-[#1A0F0B]" />

        <div className="relative z-10 self-center p-16">
          <div className="flex items-center gap-3 mb-6">
            <FiKey className="text-amber-500" size={24} />
            <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">
              Access Recovery
            </span>
          </div>
          <h2 className="text-6xl text-white leading-tight mb-6">
            Lost Your <br />
            <span className="italic font-light text-amber-500">Seal?</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-sm font-sans leading-relaxed">
            Even the most diligent scribes misplace their keys. We shall help
            you forge a new one.
          </p>
        </div>
      </div>

      {/* 2. RIGHT PANEL: REQUEST FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          {/* Back to Login */}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-[#A1887F] hover:text-[#3E2723] transition-colors mb-12 text-xs font-bold uppercase tracking-widest group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Entry
          </Link>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <h1 className="text-4xl text-[#3E2723] mb-3">Reset Password</h1>
              <p className="text-[#A1887F] font-sans text-sm leading-relaxed">
                Provide your registered email address, and we will send a
                recovery link to your inbox.
              </p>
            </div>

            <form
              className="space-y-8"
              onSubmit={(e) => sendResetOTP(e, email, setIsEmailSent)}
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#3E2723]/60 ml-1">
                  Registered Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#A1887F]">
                    <FiMail size={18} />
                  </div>
                  <input
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    className="w-full bg-white border border-[#3E2723]/10 py-4 pl-12 pr-4 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all font-sans text-sm shadow-sm"
                    placeholder="scribe@archive.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3E2723] hover:bg-[#5D4037] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-950/20 active:scale-[0.98]"
              >
                Send Recovery Link
                <FiArrowRight />
              </button>
            </form>
          </div>

          {/* Footer Assistance */}
          <div className="mt-16 pt-8 border-t border-[#3E2723]/5">
            <p className="text-xs font-sans text-[#A1887F]">
              Struggling to remember?{" "}
              <Link
                to="/support"
                className="text-[#3E2723] font-bold hover:underline"
              >
                Speak with an Archivist
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
