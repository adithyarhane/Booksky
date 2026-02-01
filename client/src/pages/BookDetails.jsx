import React, { useEffect, useState } from "react";
import { FiShield, FiTruck } from "react-icons/fi";
import RelatedBooks from "../components/RelatedBooks";
import { useBookContext } from "../context/BookContext";
import { useParams } from "react-router-dom";
import ReviewModelForm from "../components/ReviewModelForm";
import Reviews from "../components/Reviews";
import { useWishlistContext } from "../context/WishlistContext";
import { useReviewContext } from "../context/ReviewContext";
import BookDetailsInfoSec from "../components/BookDetailsInfoSec";
import useTitle from "../components/useTitle";

const BookDetails = () => {
  const { wishlistBooks } = useWishlistContext();
  const { getReviews } = useReviewContext();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const { fetchBook, book } = useBookContext();
  const { slug, bookId } = useParams();

  useTitle(book ? book.title : "Book Details");

  useEffect(() => {
    fetchBook(slug, wishlistBooks);
    getReviews(bookId);
  }, [slug, wishlistBooks]);

  return (
    book && (
      <section className="min-h-screen bg-[#f5f1ea] text-[#1A1A1A] selection:bg-[#7a4a2e] selection:text-white relative">
        <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
          {/* --- MAIN INTERFACE --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* LEFT: Cinematic Image Display (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="group relative aspect-3/4 overflow-hidden bg-[#F5F1EA] rounded-2xl shadow-2xl transition-all duration-700 hover:shadow-emerald-900/5">
                <img
                  src={book.images.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-stone-100 flex items-center gap-3">
                  <FiTruck className="text-emerald-800" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    Fast Registry Delivery
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-100 flex items-center gap-3">
                  <FiShield className="text-emerald-800" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    Collector's Grade
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: High-Contrast Typographic Info (Span 7) */}
            <BookDetailsInfoSec />
          </div>

          {/* --- REVIEWS SECTION --- */}
          <Reviews setShowReviewModal={setShowReviewModal} />
          {/* --- REVIEW MODAL OVERLAY --- */}
          {showReviewModal && (
            <ReviewModelForm setShowReviewModal={setShowReviewModal} />
          )}
          <RelatedBooks />
        </div>
      </section>
    )
  );
};

export default BookDetails;
