import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import BookCard from "./BookCard";
import { useBookContext } from "../context/BookContext";

const BooksForAllAges = () => {
  const { booksForEveryone } = useBookContext();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 450;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-[#FCF9F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* 1. LEFT PANEL: STICKY EDITORIAL CALLOUT */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 z-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-amber-900/30" />
              <span className="text-amber-900 text-[10px] font-black uppercase tracking-[0.5em]">
                The Chronology
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl text-[#2C1B18] font-serif leading-[0.9] mb-8 tracking-tighter">
              Books for
              <br />
              <span className="italic font-light text-amber-900/40">
                Every Ages
              </span>
            </h2>

            <p className="text-[#A1887F] font-sans text-sm leading-relaxed mb-10 max-w-xs">
              A curated progression of literature, evolving alongside the
              complexity of the human experience and imagination.
            </p>

            {/* Navigation Buttons (Hidden on mobile scroll, shown here for tablet/desktop) */}
            <div className="hidden sm:flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-full border border-[#2C1B18]/10 flex items-center justify-center text-[#2C1B18] hover:bg-[#2C1B18] hover:text-white transition-all duration-500"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-full bg-[#2C1B18] flex items-center justify-center text-white hover:bg-amber-900 transition-all duration-500 shadow-xl shadow-amber-950/20"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            <div className="mt-12 group cursor-pointer inline-flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#2C1B18]">
                Explore Full Library
              </span>
              <div className="w-8 h-8 rounded-full border border-[#2C1B18]/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <FiArrowRight size={14} />
              </div>
            </div>
          </div>

          {/* 2. RIGHT PANEL: FLUID SCROLLABLE CARDS */}
          <div className="lg:w-2/3 w-full">
            <div
              ref={scrollRef}
              // Fixed the overlapping here: auto-cols logic prevents cards from bleeding into each other
              className="grid grid-flow-col auto-cols-[calc(75%-20px)] sm:auto-cols-[300px] gap-6 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {booksForEveryone &&
                booksForEveryone.map((book) => (
                  <div key={book._id} className="snap-start shrink-0">
                    <BookCard book={book} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksForAllAges;
