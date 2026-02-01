import React from "react";
import { FiMapPin } from "react-icons/fi";
import { useOrderContext } from "../context/OrderContext";

const ShippingAddressForm = () => {
  const { address, setAddress } = useOrderContext();
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <FiMapPin className="text-stone-400" />
        <h2 className="text-xs font-black uppercase tracking-[0.3em]">
          Shipping Destination
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4">
            Full Name
          </label>
          <input
            defaultValue={address.name}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                name: e.target.value,
              }))
            }
            type="text"
            placeholder="Julian Thorne"
            className="w-full bg-white/50 border border-stone-200 rounded-full px-6 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-800 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4">
            Phone Number
          </label>
          <input
            defaultValue={address.phone}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                phone: e.target.value,
              }))
            }
            type="text"
            placeholder="+919000341233"
            className="w-full bg-white/50 border border-stone-200 rounded-full px-6 py-4 focus:bg-white focus:outline-none transition-all"
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4">
            Street Address
          </label>
          <input
            defaultValue={address.street_address}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                street_address: e.target.value,
              }))
            }
            type="text"
            placeholder="42 Bibliophile Lane"
            className="w-full bg-white/50 border border-stone-200 rounded-full px-6 py-4 focus:bg-white focus:outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4">
            City, State
          </label>
          <input
            defaultValue={address.city}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                city: e.target.value,
              }))
            }
            type="text"
            placeholder="Los Angeles, California"
            className="w-full bg-white/50 border border-stone-200 rounded-full px-6 py-4 focus:bg-white focus:outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[9px] font-black uppercase tracking-widest text-stone-400 ml-4">
            Postcode
          </label>
          <input
            defaultValue={address.postal_code}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                postal_code: e.target.value,
              }))
            }
            type="text"
            placeholder="PINCODE"
            className="w-full bg-white/50 border border-stone-200 rounded-full px-6 py-4 focus:bg-white focus:outline-none transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default ShippingAddressForm;
