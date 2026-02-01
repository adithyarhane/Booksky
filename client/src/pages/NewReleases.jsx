import React from "react";
import { FiArrowRight, FiClock, FiGrid } from "react-icons/fi";
import { useBookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import useTitle from "../components/useTitle";

const NewReleases = () => {
  useTitle("New Releases");
  const { newReleases } = useBookContext();

  return (
    <main className="min-h-screen bg-[#FBFBF9] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-2">
        {/* --- 1. MINIMALIST TITLE SECTION --- */}
        <header className="mb-6 flex flex-row md:items-end justify-between border-b border-stone-200 pb-6 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiClock className="text-amber-900" size={14} />
              <span className="text-amber-900 text-[9px] font-black uppercase tracking-[0.5em]">
                Latest Acquisitions
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-serif text-[#2C1B18] tracking-tighter leading-none">
              New{" "}
              <span className="italic font-light text-stone-300">
                Releases.
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <p className="text-[8px] font-black uppercase text-stone-400 tracking-widest">
                Update Frequency
              </p>
              <p className="text-sm font-serif italic text-stone-600">
                Every 48 Hours
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#2C1B18] text-white px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-amber-950 transition-all">
              Filter Archive <FiGrid />
            </button>
          </div>
        </header>

        {/* --- 2. GRID OF REUSABLE CARDS --- */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {newReleases &&
            newReleases.map((book) => <BookCard key={book.id} book={book} />)}
        </section>

        {/* --- 3. THE DISPATCH (NEWSLETTER) --- */}
        <footer className="mt-48 pt-24 border-t border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-serif text-[#2C1B18] mb-4 italic">
                The Weekly Dispatch
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed max-w-sm">
                A curated briefing of the week's most significant additions to
                our physical and digital archives. No noise, just literature.
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="EMAIL@DOMAIN.COM"
                className="w-full bg-transparent border-b border-stone-300 py-4 text-xs font-black tracking-widest outline-none focus:border-amber-900 transition-colors"
              />
              <button className="absolute right-0 bottom-4 text-amber-900 hover:text-[#2C1B18] transition-colors">
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default NewReleases;
