import React from "react";
import {
  FiSend,
  FiGlobe,
  FiMessageSquare,
  FiCommand,
  FiArrowRight,
} from "react-icons/fi";
import useTitle from "../components/useTitle";

const ContactPage = () => {
  useTitle("Contact Us");
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1A1A1A] font-sans selection:bg-emerald-100">
      <div className="max-w-360 mx-auto px-6 md:px-16 pt-32 pb-24 relative z-10">
        {/* --- HEADER BLOCK --- */}
        <header className="mb-24 space-y-8">
          <div className="inline-flex items-center gap-4 px-4 py-2 bg-white rounded-full shadow-sm border border-stone-100">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500">
              Nexus Terminal // Secure Channel
            </span>
          </div>

          <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.75] tracking-tighter">
            Open the <br />
            <span className="italic font-light text-stone-300">Vault.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* --- LEFT: THE CORRESPONDENCE FORM --- */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-xl border border-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-stone-200/50">
            <form className="space-y-16">
              <div className="space-y-12">
                {/* Floating Input Group */}
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-stone-100 py-4 outline-none focus:border-emerald-600 transition-all font-serif text-2xl peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label className="absolute left-0 top-4 text-stone-300 text-2xl font-serif italic transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-sans peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-600 peer-valid:-top-6 peer-valid:text-[10px] peer-valid:font-sans peer-valid:font-black">
                    Your Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-stone-100 py-4 outline-none focus:border-emerald-600 transition-all font-serif text-2xl peer placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label className="absolute left-0 top-4 text-stone-300 text-2xl font-serif italic transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-sans peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-600 peer-valid:-top-6 peer-valid:text-[10px] peer-valid:font-sans peer-valid:font-black">
                    Electronic Address
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    rows="3"
                    required
                    className="w-full bg-transparent border-b-2 border-stone-100 py-4 outline-none focus:border-emerald-600 transition-all font-serif text-2xl peer placeholder-transparent resize-none"
                    placeholder="Message"
                  />
                  <label className="absolute left-0 top-4 text-stone-300 text-2xl font-serif italic transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-sans peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-emerald-600 peer-valid:-top-6 peer-valid:text-[10px] peer-valid:font-sans peer-valid:font-black">
                    Brief of Inquiry
                  </label>
                </div>
              </div>

              <button className="relative overflow-hidden group w-full md:w-auto px-16 py-6 bg-stone-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:shadow-2xl hover:shadow-emerald-900/20 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Dispatch Query{" "}
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </div>

          {/* --- RIGHT: SYSTEM INFO & REPOSITORIES --- */}
          <div className="lg:col-span-5 flex flex-col justify-between py-8">
            <div className="space-y-16">
              {/* Branch Selection */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 border-l-2 border-emerald-500 pl-4">
                  Physical Hubs
                </h3>
                <div className="space-y-10">
                  {[
                    {
                      city: "Berlin",
                      zone: "Zone 02 // Mitte",
                      contact: "berlin@nexus.archive",
                    },
                    {
                      city: "Tokyo",
                      zone: "Zone 09 // Shibuya",
                      contact: "tokyo@nexus.archive",
                    },
                  ].map((hub, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="text-3xl font-serif italic group-hover:text-emerald-700 transition-colors">
                          {hub.city}
                        </h4>
                        <FiArrowRight
                          size={16}
                          className="text-stone-200 group-hover:translate-x-2 group-hover:text-emerald-500 transition-all"
                        />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                        {hub.zone}
                      </p>
                      <p className="text-xs font-mono text-stone-300 mt-2">
                        {hub.contact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Channels */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white border border-stone-100 hover:border-emerald-200 transition-colors">
                  <FiMessageSquare className="text-emerald-500 mb-4" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">
                    Live Comms
                  </p>
                  <p className="text-sm font-serif italic">Curator Chat</p>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-stone-100 hover:border-emerald-200 transition-colors">
                  <FiGlobe className="text-emerald-500 mb-4" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">
                    Global
                  </p>
                  <p className="text-sm font-serif italic">Media Kit</p>
                </div>
              </div>
            </div>

            {/* System Status Footer */}
            <div className="pt-12 mt-12 border-t border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FiCommand size={14} className="text-stone-300" />
                <span className="text-[9px] font-mono tracking-[0.3em] text-stone-300 uppercase">
                  System.Secure
                </span>
              </div>
              <span className="text-[9px] font-mono text-stone-300">
                © 2026 // NEXUS
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
