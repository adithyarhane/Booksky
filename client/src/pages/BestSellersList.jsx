import React from "react";
import {
  FiTrendingUp,
  FiAward,
  FiArrowDown,
  FiArrowRight,
} from "react-icons/fi";
import BookCard from "../components/BookCard";
import { useBookContext } from "../context/BookContext";
import useTitle from "../components/useTitle";

const BestSellersList = () => {
  const { bestSellerBooks } = useBookContext();

  useTitle("Best Sellers");

  return (
    <main className="min-h-screen bg-[#FDFCFB] pb-40">
      {/* --- 1. HERO SPOTLIGHT --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#F8F5F2]">
        {/* Subtle Vertical Text Label */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-[10px] font-black uppercase tracking-[1em] text-stone-300 -rotate-90 block origin-left">
            ESTABLISHED MMXXVI
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-4 animate-fade-in">
              <span className="h-px w-12 bg-amber-600"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-amber-700">
                The Literary Index
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-serif leading-[0.8] tracking-tight text-[#1A1A1A]">
              Top <br />
              <span className="italic font-light text-stone-400 pl-8 md:pl-20">
                Volumes.
              </span>
            </h1>

            <p className="text-base text-stone-500 font-light max-w-md leading-relaxed border-l border-stone-200 pl-8 ml-8 md:ml-20">
              A curated hierarchy of texts that defined the cultural zeitgeist.
              Not just sold, but{" "}
              <span className="text-stone-800 font-medium italic underline underline-offset-4 decoration-amber-200">
                studied.
              </span>
            </p>
          </div>

          {/* Featured Spotlight Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-3/4 w-full max-w-sm ml-auto overflow-hidden rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={bestSellerBooks?.[0]?.images?.cover}
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000"
                alt="Bestseller Spotlight"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Floating Info Tag */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-60 hidden md:block border border-stone-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">
                Current No. 1
              </p>
              <h3 className="text-lg font-serif mb-3 leading-tight">
                {bestSellerBooks?.[0]?.title}
              </h3>
              <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                View Dossier{" "}
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. RANKED LIST --- */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <header className="flex items-baseline justify-between mb-20 border-b border-stone-200 pb-8">
          <div className="flex items-center gap-3">
            <FiTrendingUp className="text-amber-900" />
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#2C1B18]">
              The Top Indices
            </h2>
          </div>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest">
            Updated Jan 2026
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {bestSellerBooks?.map((book) => (
            <div key={book.id} className="relative">
              <div className="relative z-10">
                <BookCard book={book} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. CURATORIAL FOOTNOTE --- */}
      <footer className="mt-40 max-w-4xl mx-auto text-center px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-stone-200 mb-8 italic font-serif text-2xl text-stone-300">
          &
        </div>
        <h4 className="text-xl font-serif text-[#2C1B18] mb-4">
          A Note on Selection
        </h4>
        <p className="text-xs text-stone-500 font-light leading-relaxed italic">
          "Best Sellers" at our archive are not merely calculated by volume of
          acquisition, but by the depth of engagement within our reading rooms
          and the enduring relevance of the text's philosophy.
        </p>
      </footer>
    </main>
  );
};

export default BestSellersList;
