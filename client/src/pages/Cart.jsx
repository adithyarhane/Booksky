import React from "react";
import {
  FiArrowRight,
  FiTruck,
  FiShield,
  FiInfo,
  FiShoppingBag,
} from "react-icons/fi";
import { useCartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import useTitle from "../components/useTitle";

const Cart = () => {
  const { cartData } = useCartContext();

  const subtotal = cartData?.summary?.subtotal || 0;
  const freeShippingThreshold = 1000;
  const shipping = subtotal > freeShippingThreshold || subtotal === 0 ? 0 : 50;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  useTitle("Your Cart");

  const isEmpty = !cartData || cartData.items.length === 0;

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1A1A1A] selection:bg-[#7a4a2e] selection:text-white pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* --- HEADER --- */}
        <header className="mb-12 space-y-4">
          <h1 className="text-3xl md:text-6xl font-serif tracking-tighter">
            Acquisition <span className="italic text-stone-400">Manifest</span>
          </h1>
          <p className="text-stone-500 font-serif italic text-lg">
            Review your selected volumes before archive confirmation.
          </p>
        </header>

        {isEmpty ? (
          /* --- EMPTY STATE --- */
          <section className="py-20 flex flex-col items-center justify-center text-center space-y-6    p-12">
            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-stone-300">
              <FiShoppingBag size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-serif">
                Your archive is currently empty
              </h2>
              <p className="text-stone-500 font-sans text-sm max-w-xs mx-auto leading-relaxed">
                It seems you haven't curated any volumes for your personal
                collection yet.
              </p>
            </div>
            <Link
              to="/book-list"
              className="mt-4 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800 hover:text-black transition-colors group"
            >
              Begin Curating{" "}
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </section>
        ) : (
          /* --- CART CONTENT --- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* --- LEFT: ITEMS LIST --- */}
            <div className="lg:col-span-8 space-y-8">
              {/* Free Shipping Progress */}
              <div className="bg-white/50 border border-stone-200 p-6 rounded-3xl space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <FiTruck /> Registry Logistics
                  </span>
                  <span>
                    {subtotal >= 1000
                      ? "Complementary Delivery Unlocked"
                      : `₹${freeShippingThreshold - subtotal} away from free delivery`}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-800 transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Items Table/Cards */}
              <div className="space-y-4">
                {cartData?.items.map((item) => (
                  <CartCard key={item.book._id} item={item} />
                ))}
              </div>
            </div>

            {/* --- RIGHT: SUMMARY --- */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
              <div className="bg-[#1C1B1F] text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                <h2 className="text-2xl font-serif mb-8 italic">
                  Order Summary
                </h2>

                <div className="space-y-4 border-b border-white/10 pb-8">
                  <div className="flex justify-between text-xs font-light tracking-widest uppercase text-stone-400">
                    <span>Subtotal</span>
                    <span className="text-white">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs font-light tracking-widest uppercase text-stone-400">
                    <span>Registry Fees</span>
                    <span className="text-white">₹0</span>
                  </div>
                  <div className="flex justify-between text-xs font-light tracking-widest uppercase text-stone-400">
                    <span>Logistics</span>
                    <span className="text-white">
                      {shipping === 0 ? "Free" : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <div className="pt-8 space-y-8">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">
                      Total Valuation
                    </span>
                    <span className="text-4xl font-serif tracking-tighter">
                      ₹{cartData?.summary.totalPayable + shipping}
                    </span>
                  </div>

                  <Link
                    to={"/checkout"}
                    className="w-full py-5 bg-white text-[#1C1B1F] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
                  >
                    Checkout <FiArrowRight />
                  </Link>
                </div>
              </div>

              {/* Trust Tags */}
              <div className="px-4 space-y-4">
                <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-stone-400">
                  <FiShield className="text-emerald-800" size={16} /> Secure
                  Encrypted Protocol
                </div>
                <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-stone-400">
                  <FiInfo className="text-emerald-800" size={16} /> 14-Day
                  Return Policy
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
