import React from "react";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { usePaymentContext } from "../context/PaymentContext";
import { FiCreditCard } from "react-icons/fi";
import { useOrderContext } from "../context/OrderContext";

const CheckoutSummarySec = () => {
  const { userData } = useAuthContext();
  const { cartData } = useCartContext();
  const { placeRazorpayOrder } = usePaymentContext();
  const { address } = useOrderContext();

  const subtotal = cartData?.summary.subtotal;
  const shipping = subtotal > 1000 ? 0 : 50;
  return (
    <aside className="lg:col-span-5">
      <div className="bg-white border border-stone-200 rounded-[2.5rem] p-8 md:p-12 lg:sticky lg:top-32 shadow-xl shadow-stone-200/50">
        <h2 className="text-2xl font-serif italic mb-8 border-b border-stone-100 pb-6">
          Order Review
        </h2>

        {/* Mini Item List */}
        <div className="space-y-6 mb-8 max-h-60 overflow-y-auto pr-2 scrollbar-hide">
          {cartData?.items.map((item) => (
            <div className="flex items-center gap-4">
              <div className="w-12 h-16 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                <img
                  src={item.book.images.cover}
                  alt="Book"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grow min-w-0">
                <h4 className="text-sm font-serif truncate">
                  {item.book.title}
                </h4>
                <p className="text-[9px] font-black uppercase text-stone-400">
                  Qty: {item.quantity}
                </p>
              </div>
              <span className="text-sm font-serif">
                ₹{item.book.pricing.price}
              </span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="space-y-4 pt-6 border-t border-stone-100">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-400">
            <span>Subtotal</span>
            <span className="text-black">₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-400">
            <span>Logistics</span>
            <span className="text-black">₹{shipping}</span>
          </div>
          <div className="flex justify-between items-end pt-4">
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Total Due
            </span>
            <span className="text-4xl font-serif tracking-tighter text-emerald-900">
              ₹{subtotal + shipping}
            </span>
          </div>
        </div>

        <button
          onClick={(e) =>
            placeRazorpayOrder(e, address, userData.isAccountVerified)
          }
          className="w-full mt-10 py-5 bg-[#1C1B1F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-950 transition-all flex items-center justify-center gap-3"
        >
          Proceed to Payment <FiCreditCard />
        </button>

        <p className="mt-6 text-[9px] text-center text-stone-400 uppercase tracking-widest leading-relaxed">
          By confirming, you agree to the <br />
          <span className="underline cursor-pointer hover:text-black">
            Terms of Archive Acquisition
          </span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSummarySec;
