import React, { useEffect } from "react";
import { FiArrowRight, FiSearch, FiBox } from "react-icons/fi";
import { useOrderContext } from "../context/OrderContext";
import { useAuthContext } from "../context/AuthContext";
import OrderItemCard from "../components/OrderItemCard";
import useTitle from "../components/useTitle";

const Orders = () => {
  useTitle("Your Orders");
  const { userData } = useAuthContext();
  const { getOrdersData, ordersData } = useOrderContext();

  useEffect(() => {
    getOrdersData();
  }, [userData]);

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1A1A1A] selection:bg-[#7a4a2e] selection:text-white pb-24">
      {/* Subtle Grain Overlay for texture */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-28 lg:pt-32 relative z-10">
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8 border-b border-stone-200 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg border border-stone-200 shadow-sm">
                <FiBox className="text-emerald-800" size={16} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400">
                Archival Records
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight leading-tight">
              Your{" "}
              <span className="italic font-light text-stone-400">Orders.</span>
            </h1>
          </div>

          {/* Search/Filter Bar */}
          <div className="relative w-full md:w-80 group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-emerald-800 transition-colors" />
            <input
              type="text"
              placeholder="Search Archives..."
              className="w-full bg-white/60 border border-stone-200 rounded-xl py-4 pl-12 pr-6 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-800/20 transition-all shadow-sm"
            />
          </div>
        </header>

        {/* --- ORDERS LIST --- */}
        <section className="space-y-16">
          {ordersData &&
            ordersData.map((order) => <OrderItemCard order={order} />)}
        </section>

        {/* --- FOOTER CTA --- */}
        <footer className="mt-40 text-center border-t border-stone-200 pt-20">
          <p className="text-stone-400 font-serif italic text-2xl mb-8">
            Seeking your next masterpiece?
          </p>
          <button className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-emerald-800 border-b-2 border-emerald-800 pb-2 hover:text-stone-900 hover:border-stone-900 transition-all group">
            Browse New Volumes
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </footer>
      </div>
    </main>
  );
};

export default Orders;
