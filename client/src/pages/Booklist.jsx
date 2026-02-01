import React from "react";
import { useBookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import BookListPaginationSec from "../components/BookListPaginationSec";
import BookListFilterSec from "../components/BookListFilterSec";
import { useUIContext } from "../context/UIContext";
import useTitle from "../components/useTitle";

const BookList = () => {
  const { booksData, setSearch } = useBookContext();
  const { viewMode } = useUIContext();

  useTitle("Book List");

  return (
    <main className="min-h-screen bg-[#FCF9F2] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-2">
        {/* --- SECTION 1: EDITORIAL HEADER --- */}
        <header className="mb-2 pt-2">
          <div className="flex flex-row justify-between items-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-amber-900/40 text-[9px] font-black uppercase tracking-[0.5em]">
                  Archive Catalogue
                </span>
                <div className="h-px w-24 bg-linear-to-r from-amber-900/20 to-transparent" />
              </div>
              <h1 className="text-2xl md:text-4xl font-serif text-[#2C1B18] tracking-tighter flex flex-wrap items-baseline gap-x-4">
                <span>Curated</span>
                <span className="italic font-extralight text-stone-300">
                  Volumes
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-8 w-px bg-stone-200 hidden md:block" />
              <div className="flex flex-col items-start md:items-end">
                <p className="text-[18px] font-serif italic text-[#2C1B18] leading-none">
                  {booksData && booksData.totalBooks}
                </p>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-stone-400 mt-1">
                  Total Editions
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* --- SECTION 2: FILTERS & SEARCH --- */}
        <BookListFilterSec />

        {/* --- SECTION 3: THE GRID --- */}
        {booksData && booksData.totalBooks > 0 ? (
          <>
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
                  : "flex flex-col gap-4"
              }
            >
              {booksData &&
                booksData.data.map((book) => (
                  <div
                    key={book._id}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  >
                    <BookCard book={book} />
                  </div>
                ))}
            </div>

            {/* --- PAGINATION CONTROLS --- */}
            <BookListPaginationSec />
          </>
        ) : (
          <div className="py-40 text-center">
            <p className="font-serif text-3xl text-stone-300 italic">
              No volumes found.
            </p>
            <button
              onClick={() => {
                setSearch("");
              }}
              className="mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-amber-900 underline underline-offset-8"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
};

export default BookList;
