import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { useBookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

const BestSellers = () => {
  const { bestSellerBooks } = useBookContext();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* 1. LEFT PANEL: EDITORIAL CALLOUT */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-amber-600" />
              <span className="text-amber-700 text-[10px] font-black uppercase tracking-[0.5em]">
                Most Acquired
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl text-[#3E2723] font-serif leading-none mb-8">
              Best <br />
              <span className="italic font-light text-amber-900/40">
                Sellers.
              </span>
            </h2>

            <p className="text-[#A1887F] font-sans text-sm leading-relaxed mb-10 max-w-xs">
              The volumes currently gracing the desks of our most distinguished
              collectors.
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-full border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all duration-300"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-full bg-[#3E2723] flex items-center justify-center text-white hover:bg-[#5D4037] transition-all duration-300 shadow-xl shadow-amber-950/20"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            <Link
              to={"/bestsellers"}
              onClick={() => scrollTo(0, 0)}
              className="mt-12 group cursor-pointer inline-flex items-center gap-3"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-[#3E2723]">
                View Full Rankings
              </span>
              <div className="w-8 h-8 rounded-full border border-[#3E2723]/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <FiArrowRight size={14} />
              </div>
            </Link>
          </div>

          {/* 2. RIGHT PANEL: SCROLLABLE CARDS */}
          <div className="lg:w-2/3 w-full">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-12 pt-4 hide-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {bestSellerBooks &&
                bestSellerBooks.slice(0, 8).map((book) => (
                  <div key={book._id} className="shrink-0 snap-start">
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

export default BestSellers;
