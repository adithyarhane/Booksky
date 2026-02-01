import React from "react";
import { FiArrowRight, FiHeart, FiBook } from "react-icons/fi";
import BookCard from "../components/BookCard";
import BookSkeleton from "../components/BookSkeleton"; // Assuming it's in your components folder
import { useWishlistContext } from "../context/WishlistContext";
import useTitle from "../components/useTitle";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  useTitle("Your Wishlist");
  const navigate = useNavigate();

  const { wishlistBooks, isLoading } = useWishlistContext();

  const isEmpty = !isLoading && (!wishlistBooks || wishlistBooks.length === 0);

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1A1A1A] selection:bg-[#7a4a2e] selection:text-white pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-2 pt-32">
        {/* --- HEADER & SUMMARY --- */}
        <header className="flex flex-row justify-between items-center mb-12 gap-8 border-b border-stone-200 pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiHeart
                className="text-emerald-800 fill-emerald-800"
                size={14}
              />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">
                Registry Collection
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-serif tracking-tighter leading-none">
              Your{" "}
              <span className="italic font-light text-stone-400">Library.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 text-right ">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                Total Volumes
              </p>
              <p className="text-2xl font-serif">
                {isLoading ? "..." : wishlistBooks?.length || 0}
              </p>
            </div>
          </div>
        </header>

        {/* --- GRID INTERFACE --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {isLoading ? (
            /* Show Skeletons while loading */
            Array.from({ length: 4 }).map((_, i) => <BookSkeleton key={i} />)
          ) : isEmpty ? (
            /* Sophisticated Empty State */
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-300">
                <FiBook size={24} />
              </div>
              <p className="font-serif text-xl text-stone-400 italic">
                Your registry is currently empty.
              </p>
              <button
                onClick={() => navigate("/book-list")}
                className="text-[10px] font-black uppercase tracking-widest text-emerald-800 hover:text-black transition-colors"
              >
                + Start Adding to Collection
              </button>
            </div>
          ) : (
            /* Render Wishlist Books */
            wishlistBooks.map((item) => (
              <div key={item._id} className="animate-in fade-in duration-500">
                <BookCard book={item.book} />
              </div>
            ))
          )}
        </div>

        {/* --- FOOTER --- */}
        {!isEmpty && (
          <footer className="mt-24 text-center pb-12">
            <button
              onClick={() => navigate("/book-list")}
              className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800 hover:text-[#1A1A1A] transition-colors group"
            >
              Explore the Full Archive{" "}
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </footer>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
