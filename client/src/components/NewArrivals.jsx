import React, { useEffect, useState } from "react";
import { FiPlus, FiArrowRight, FiZap } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useBookContext } from "../context/BookContext";

const NewArrivals = () => {
  const navigate = useNavigate();
  const { newReleases } = useBookContext();
  const [featured, setFeatured] = useState();
  const [others, setOthers] = useState();

  useEffect(() => {
    const newArrival = () => {
      const feature = newReleases && newReleases.filter((a) => a.isFeatured);
      const others = newReleases && newReleases.filter((a) => !a.isFeatured);
      setFeatured(feature);
      setOthers(others);
    };
    newArrival();
  }, [newReleases]);

  return (
    <section className="py-12 bg-[#FCF9F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700">
              <FiZap size={20} />
            </div>
            <h2 className="text-4xl text-[#3E2723] font-serif">
              Freshly <span className="italic font-light">Unbound</span>
            </h2>
          </div>
          <Link
            onClick={() => scrollTo(0, 0)}
            to="/new-releases"
            className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#A1887F] hover:text-[#3E2723] transition-colors"
          >
            View All New <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 1. LARGE FEATURED ARRIVAL */}
          <div className="lg:col-span-7 group">
            <div className="relative flex flex-col md:flex-row gap-8 bg-white p-6 rounded-[2.5rem] border border-[#3E2723]/5 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10">
              <div className="w-full md:w-1/2 aspect-3/4 overflow-hidden rounded-2xl shadow-xl">
                <img
                  onClick={() => {
                    scrollTo(0, 0);
                    navigate(
                      `/book-details/${featured[0].slug}/${featured[0]._id}`,
                    );
                  }}
                  src={featured && featured[0].images.cover}
                  alt={featured && featured[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center py-4">
                <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Featured New Release
                </span>
                <h3 className="text-3xl text-[#3E2723] font-serif mb-4 leading-tight">
                  {featured && featured[0].title}
                </h3>
                <p className="text-[#A1887F] font-sans text-sm leading-relaxed mb-6 italic">
                  "{featured && featured[0].description}"
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-sans font-bold text-[#3E2723]">
                    ${featured && featured[0].pricing.price}
                  </span>
                  <button className="bg-[#3E2723] text-white p-4 rounded-full hover:bg-amber-800 transition-colors shadow-lg">
                    <FiPlus size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. SIDE LIST OF OTHERS */}
          <div className="lg:col-span-5 space-y-6">
            {others &&
              others.slice(0, 2).map((book) => (
                <div
                  key={book._id}
                  className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-[#3E2723]/5"
                >
                  <div
                    onClick={() => {
                      scrollTo(0, 0);
                      navigate(`/book-details/${book.slug}/${book._id}`);
                    }}
                    className="w-20 h-28 shrink-0 rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={book.images.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#A1887F] mb-1">
                      {book.authors[0].name}
                    </p>
                    <h4 className="text-lg text-[#3E2723] font-serif leading-tight mb-2 group-hover:text-amber-800 transition-colors">
                      {book.title}
                    </h4>
                    <span className="text-sm font-bold text-[#3E2723]">
                      ${book.pricing.price}
                    </span>
                  </div>

                  <button className="w-10 h-10 rounded-full border border-[#3E2723]/10 flex items-center justify-center text-[#A1887F] hover:bg-[#3E2723] hover:text-white transition-all">
                    <FiPlus size={16} />
                  </button>
                </div>
              ))}

            <Link
              to="/new-releases"
              onClick={() => scrollTo(0, 0)}
              className="block text-center py-4 border-2 border-dashed border-[#3E2723]/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#A1887F] hover:border-amber-500 hover:text-[#3E2723] transition-all mt-8"
            >
              Explore {10}+ New Volumes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
