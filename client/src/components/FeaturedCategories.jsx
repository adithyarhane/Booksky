import React from "react";
import { FiArrowUpRight, FiLayers, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Classic Literature",
      count: "1,240",
      image:
        "https://i.pinimg.com/1200x/c6/6b/b0/c66bb012e2e98bf71f701d3aa0b75da4.jpg",
      className: "md:col-span-2 md:row-span-2 min-h-[400px]",
      tag: "Legacy",
      desc: "Timeless narratives that defined the human experience through prose.",
      isLarge: true,
    },
    {
      title: "Philosophy",
      count: "850",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1 min-h-[280px]",
      tag: "Thought",
      desc: "The architecture of reason.",
      isLarge: false,
    },
    {
      title: "Science & Tech",
      count: "2,100",
      image:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1 min-h-[280px]",
      tag: "Progress",
      desc: "Decoding the physical laws.",
      isLarge: false,
    },
    {
      title: "Rare Editions",
      count: "120",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200",
      className: "md:col-span-1 md:row-span-1 min-h-[280px]",
      tag: "Artifacts",
      desc: "Fragile windows into history's exclusive ink.",
      isLarge: false,
    },
    {
      title: "Modern Poetry",
      count: "430",
      image:
        "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1200",
      className: "md:col-span-2 md:row-span-1 min-h-[280px]",
      tag: "Verse",
      desc: "Rhythm for the contemporary soul that resonates through time.",
      isLarge: true,
    },
  ];

  return (
    <section className="py-12 bg-[#FAF7F2] overflow-hidden selection:bg-amber-100">
      <div className="max-w-360 mx-auto px-6">
        <header className="relative flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-white rounded-full shadow-sm border border-stone-100">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-stone-500 text-[9px] font-bold uppercase tracking-[0.3em]">
                Archive Node 0.24 // 2026
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl text-[#1A1A1A] font-serif leading-[0.8] tracking-tighter">
              The <br />
              <span className="italic font-light text-stone-300">Matrix.</span>
            </h2>
          </div>

          <div className="lg:text-right">
            <Link
              to="/book-list"
              onClick={() => scrollTo(0, 0)}
              className="group inline-flex items-center gap-4"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-900 border-b border-stone-200 group-hover:border-amber-500 transition-all">
                View All Vaults
              </span>
              <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                <FiArrowUpRight />
              </div>
            </Link>
          </div>
        </header>

        {/* --- FIXED BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              onClick={() => scrollTo(0, 0)}
              to={`/book-list?search=${cat.title.toLowerCase()}`}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-stone-100 transition-all duration-700 hover:shadow-2xl ${cat.className}`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80" />
              </div>

              {/* Badges - Reduced size for small cards */}
              <div className="absolute top-6 left-6 z-20">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-white text-[8px] font-bold uppercase tracking-widest leading-none">
                    {cat.tag}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                {/* Units label - Hidden on very small height if necessary, or just kept tiny */}
                <div className="flex items-center gap-3 mb-2 overflow-hidden">
                  <div className="h-px w-6 bg-amber-500/50 group-hover:w-10 transition-all duration-500" />
                  <span className="text-amber-500 text-[9px] font-bold tracking-[0.2em]">
                    {cat.count} UNITS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3
                    className={`${cat.isLarge ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} text-white font-serif leading-tight tracking-tighter transition-transform group-hover:translate-x-1 duration-500`}
                  >
                    {cat.title}
                  </h3>

                  {/* Smart Description: Capped lines to prevent overflow */}
                  <p
                    className={`text-white/60 text-xs font-light max-w-70 line-clamp-2 group-hover:text-white transition-colors duration-500 ${!cat.isLarge && "md:text-[11px]"}`}
                  >
                    {cat.desc}
                  </p>
                </div>

                {/* Bottom Link - Small and clean */}
                <div className="mt-4 flex items-center gap-2 text-white/30 group-hover:text-amber-500 transition-all duration-500">
                  <FiZap size={12} className="shrink-0" />
                  <span className="text-[8px] font-black uppercase tracking-widest">
                    Access Vault
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-stone-200 pt-10">
          <div className="flex gap-12">
            <div>
              <span className="block text-[8px] font-bold text-stone-400 uppercase tracking-widest mb-1">
                Total Indexed
              </span>
              <p className="text-2xl font-serif text-stone-900 italic">6.3k</p>
            </div>
            <div>
              <span className="block text-[8px] font-bold text-stone-400 uppercase tracking-widest mb-1">
                Global Reach
              </span>
              <p className="text-2xl font-serif text-stone-900 italic">142</p>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-50">
            <span className="text-[9px] font-mono tracking-[0.3em]">
              SYSTEM_STABLE
            </span>
            <FiLayers size={14} />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FeaturedCategories;
