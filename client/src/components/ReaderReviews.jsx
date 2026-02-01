import React, { useRef } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import {
  FiCheckCircle,
  FiStar,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const ReaderReviews = () => {
  const scrollRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Julian Vane",
      role: "Private Collector",
      score: "9.8",
      content:
        "The binding quality of the Elysium Manuscript surpassed my highest expectations. It feels less like a purchase and more like a stewardship of history.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
    },
    {
      id: 2,
      name: "Elena Rossi",
      role: "Art Historian",
      score: "10",
      content:
        "Rarely do you find an archive that treats modern editions with such archival reverence. The typography alone is worth the acquisition fee.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "Bibliophile",
      score: "9.5",
      content:
        "The curated selection is unmatched. Every delivery feels like opening a vault that hasn't been touched in a century.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
    },
    {
      id: 4,
      name: "Sophia Chen",
      role: "Library Curator",
      score: "9.9",
      content:
        "The attention to material provenance is what sets this archive apart. A true gold standard for modern bookbinding.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-40 bg-[#FCF9F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-amber-800 text-[10px] font-black uppercase tracking-[0.6em]">
                Proven Registry
              </span>
              <div className="h-px w-12 bg-amber-700/30" />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#3E2723] leading-[1.1]">
              Voices from the <br />
              <span className="italic font-light text-amber-900/40">
                Inner Circle.
              </span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="group w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#1A0F0B] hover:border-[#1A0F0B] transition-all duration-500"
            >
              <FiArrowLeft className="group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#1A0F0B] hover:border-[#1A0F0B] transition-all duration-500"
            >
              <FiArrowRight className="group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[85vw] md:min-w-112.5 snap-center group relative p-10 md:p-14 rounded-[3.5rem] bg-white border border-stone-100 transition-all duration-700 hover:shadow-[0_40px_80px_-30px_rgba(62,39,35,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-[#FCF9F2] rounded-2xl flex items-center justify-center">
                    <RiDoubleQuotesL className="text-3xl text-amber-900/20" />
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-1">
                      Entry Score
                    </p>
                    <p className="font-mono text-lg text-amber-900">
                      {review.score}
                    </p>
                  </div>
                </div>

                <blockquote className="font-serif text-2xl md:text-3xl leading-[1.4] text-[#3E2723] mb-12 italic tracking-tight">
                  “{review.content}”
                </blockquote>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-stone-50">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-2xl object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                    <FiCheckCircle className="text-amber-600" size={14} />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#3E2723]">
                    {review.name}
                  </h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-900/40 mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Statistics */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-[#FCF9F2] overflow-hidden bg-stone-200"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt="user"
                    className="grayscale opacity-80"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-[#FCF9F2] bg-amber-900 flex items-center justify-center text-[10px] text-white font-bold">
                +2k
              </div>
            </div>
            <div className="h-10 w-px bg-stone-200 hidden md:block" />
            <p className="text-[11px] font-black uppercase tracking-widest text-stone-500">
              Join 2,400+ Verified Collectors
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FiStar className="text-amber-600 fill-amber-600" size={16} />
            <span className="font-mono text-lg font-bold text-[#3E2723]">
              4.9 / 5.0
            </span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-2">
              Legacy Grade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReaderReviews;
