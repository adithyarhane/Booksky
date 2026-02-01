import React from "react";
import { FiArrowRight } from "react-icons/fi";
import BookCard from "./BookCard";
import { useBookContext } from "../context/BookContext";

const RelatedBooks = () => {
  const { relatedBooks } = useBookContext();

  return (
    <section className="mt-8 pb-6 border-t border-stone-200/50 pt-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div className="space-y-2">
          <h2 className="text-4xl font-serif italic text-[#1C1B1F]">
            Similar Volumes
          </h2>
          <p className="text-xs text-stone-400 font-light tracking-widest uppercase">
            Curated based on your current selection
          </p>
        </div>

        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 hover:text-[#1C1B1F] transition-colors group">
          View Collection{" "}
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Horizontal Scroll Layout */}
      <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x px-1">
        {relatedBooks &&
          relatedBooks.map((book) => (
            <div key={book._id}>
              <BookCard book={book} />{" "}
            </div>
          ))}
      </div>

      {/* Custom Styles for hiding scrollbar while keeping functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default RelatedBooks;
