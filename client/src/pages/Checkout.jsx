import React, { useState } from "react";
import { FiLock, FiChevronLeft, FiTruck, FiCheckCircle } from "react-icons/fi";
import ShippingAddressForm from "../components/ShippingAddressForm";
import CheckoutSummarySec from "../components/CheckoutSummarySec";
import useTitle from "../components/useTitle";

const Checkout = () => {
  const [step, setStep] = useState(3); // 1: Info, 2: Payment, 3: Success

  useTitle("Checkout");
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1A1A1A] selection:bg-[#7a4a2e] selection:text-white pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* --- NAVIGATION & SECURITY --- */}
        <nav className="flex justify-between items-center mb-12">
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-black transition-colors">
            <FiChevronLeft size={16} /> Return to Manifest
          </button>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-800">
            <FiLock /> Secure Archive Protocol
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- LEFT: FORM SECTION --- */}
          <div className="lg:col-span-7 space-y-12">
            <header className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif tracking-tighter">
                Final <span className="italic text-stone-400">Ledger.</span>
              </h1>
              <div className="flex gap-4">
                <span
                  className={`h-1 grow rounded-full transition-colors ${step >= 1 ? "bg-emerald-800" : "bg-stone-200"}`}
                />
                <span
                  className={`h-1 grow rounded-full transition-colors ${step >= 2 ? "bg-emerald-800" : "bg-stone-200"}`}
                />
              </div>
            </header>

            {/* Delivery Form */}
            <ShippingAddressForm />

            {/* Shipping Method */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <FiTruck className="text-stone-400" />
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">
                  Logistics Preference
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative flex items-center justify-between p-6 bg-white border-2 border-emerald-800 rounded-3xl cursor-pointer">
                  <div className="space-y-1">
                    <p className="text-sm font-bold">Standard Archive</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                      3-5 Business Days
                    </p>
                  </div>
                  <span className="text-sm font-serif">Free</span>
                  <FiCheckCircle className="absolute top-4 right-4 text-emerald-800" />
                </label>
                <label className="relative flex items-center justify-between p-6 bg-white/50 border border-stone-200 rounded-3xl cursor-pointer hover:border-stone-400 transition-all">
                  <div className="space-y-1">
                    <p className="text-sm font-bold">Priority Courier</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                      Next Day Delivery
                    </p>
                  </div>
                  <span className="text-sm font-serif">₹150</span>
                </label>
              </div>
            </section>
          </div>

          {/* --- RIGHT: ORDER SUMMARY --- */}
          <CheckoutSummarySec />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
