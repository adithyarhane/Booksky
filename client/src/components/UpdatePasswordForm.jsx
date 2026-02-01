import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiAlertCircle,
} from "react-icons/fi";
import { useAuthContext } from "../context/AuthContext";

const UpdatePasswordForm = () => {
  const { ResetPassword, email, resetOtp } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Simple validation logic
  const hasMinLength = password.length >= 8;
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const matches = password === confirmPassword && password.length > 0;

  return (
    <div className="min-h-screen w-full flex bg-[#FCF9F2] font-serif">
      {/* 1. LEFT PANEL: EDITORIAL ART */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#1A0F0B]">
        <img
          src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000"
          alt="Ancient Manuscript"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-[#1A0F0B] via-[#1A0F0B]/60 to-transparent" />

        <div className="relative z-10 self-center p-16">
          <div className="flex items-center gap-3 mb-6">
            <FiShield className="text-amber-500" size={24} />
            <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">
              Archival Security
            </span>
          </div>
          <h2 className="text-6xl text-white leading-tight mb-6">
            Forge a <br />
            <span className="italic font-light text-amber-500">New Key.</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-sm font-sans leading-relaxed">
            Your new credentials must be strong enough to protect your digital
            collection for years to come.
          </p>
        </div>
      </div>

      {/* 2. RIGHT PANEL: NEW PASSWORD FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl text-[#3E2723] mb-3 font-medium">
              Update Password
            </h1>
            <p className="text-[#A1887F] font-sans text-sm italic">
              Please choose a strong password that you haven't used before.
            </p>
          </div>

          <form
            onSubmit={(e) =>
              ResetPassword(
                e,
                email,
                password,
                resetOtp,
                hasMinLength,
                hasSymbol,
                matches,
              )
            }
            className="space-y-6"
          >
            {/* New Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#3E2723]/60 ml-1">
                New Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#A1887F]">
                  <FiLock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#3E2723]/60 ml-1">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#A1887F]">
                  <FiCheckCircle size={18} />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-white border border-[#3E2723]/10 py-4 pl-12 pr-4 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all font-sans text-sm shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Password Requirements Checklist */}
            <div className="bg-[#3E2723]/2 border border-[#3E2723]/5 rounded-xl p-4 space-y-3">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3E2723]/40 mb-1">
                Requirements
              </p>
              <div className="flex items-center gap-3 text-xs font-sans">
                {hasMinLength ? (
                  <FiCheckCircle className="text-green-600" />
                ) : (
                  <FiAlertCircle className="text-[#A1887F]" />
                )}
                <span
                  className={
                    hasMinLength
                      ? "text-[#3E2723] font-medium"
                      : "text-[#A1887F]"
                  }
                >
                  At least 8 characters
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans">
                {hasSymbol ? (
                  <FiCheckCircle className="text-green-600" />
                ) : (
                  <FiAlertCircle className="text-[#A1887F]" />
                )}
                <span
                  className={
                    hasSymbol ? "text-[#3E2723] font-medium" : "text-[#A1887F]"
                  }
                >
                  One special character (!@#$)
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans">
                {matches ? (
                  <FiCheckCircle className="text-green-600" />
                ) : (
                  <FiAlertCircle className="text-[#A1887F]" />
                )}
                <span
                  className={
                    matches ? "text-[#3E2723] font-medium" : "text-[#A1887F]"
                  }
                >
                  Passwords match
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!hasMinLength || !hasSymbol || !matches}
              className="w-full bg-[#3E2723] hover:bg-[#5D4037] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-950/20 active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed mt-4"
            >
              Update Credentials
              <FiArrowRight />
            </button>
          </form>

          {/* Cancellation Link */}
          <div className="mt-10 text-center">
            <Link
              to="/login"
              className="text-xs font-sans text-[#A1887F] hover:text-[#3E2723] transition-colors"
            >
              Nevermind, I remembered it.{" "}
              <span className="font-bold border-b border-[#3E2723]/20">
                Back to Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
