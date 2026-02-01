import React, { useState } from "react";
import { FiArrowRight, FiBookOpen, FiCompass } from "react-icons/fi";
import { Link } from "react-router-dom";

const PopularGenres = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const genres = [
    {
      id: "01",
      name: "Philosophy",
      count: "1,240",
      image:
        "https://i.pinimg.com/736x/0c/73/a8/0c73a8bcd3a054c66e7a41ec7af61fb1.jpg",
      color: "bg-amber-900",
    },
    {
      id: "02",
      name: "Fiction",
      count: "3,820",
      image:
        "https://i.pinimg.com/736x/f9/c4/0c/f9c40cb337f773246c8fb4b9a1de471d.jpg",
      color: "bg-stone-900",
    },
    {
      id: "03",
      name: "History",
      count: "940",
      image:
        "https://i.pinimg.com/1200x/ae/35/86/ae35867ab39afc70c4f39b11a8575b0a.jpg",
      color: "bg-orange-950",
    },
    {
      id: "04",
      name: "Poetry",
      count: "610",
      image:
        "https://i.pinimg.com/736x/7b/46/08/7b4608b5aec111264018eeee4a161d41.jpg",
      color: "bg-yellow-950",
    },
    {
      id: "05",
      name: "Science",
      count: "1,100",
      image:
        "https://i.pinimg.com/736x/e3/71/f7/e371f7bfa3345af41adde9cc5c145d1c.jpg",
      color: "bg-[#1A0F0B]",
    },
  ];

  return (
    <section className="py-12 bg-[#FCF9F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-16 border-b border-[#3E2723]/10 pb-10">
          <div className="flex items-center gap-3">
            <FiCompass className="text-amber-700" size={24} />
            <h2 className="text-5xl font-serif text-[#3E2723]">
              Popular <span className="italic font-light">Vaults.</span>
            </h2>
          </div>
          <p className="text-[#A1887F] font-sans text-xs uppercase tracking-[0.3em] font-bold md:ml-auto">
            Explore the depth of our collection
          </p>
        </div>

        {/* Dynamic Accordion Grid */}
        <div className="flex flex-col md:flex-row h-150 gap-4">
          {genres.map((genre, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              key={genre.id}
              to={`/book-list?category=${genre.name.toLowerCase()}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                hoveredIndex === index ? "flex-3" : "flex-1"
              } ${genre.color}`}
            >
              {/* Background Image */}
              <img
                src={genre.image}
                alt={genre.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  hoveredIndex === index
                    ? "scale-105 opacity-60"
                    : "scale-110 opacity-30 grayscale"
                }`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              {/* Vertical Label (Hidden on Hover) */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="text-white/40 font-serif text-3xl rotate-0 lg:-rotate-90 whitespace-nowrap tracking-tighter uppercase">
                  {genre.name}
                </span>
              </div>

              {/* Expanded Content (Visible on Hover) */}
              <div
                className={`absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-amber-500 font-mono text-xs">
                    {genre.id}
                  </span>
                  <div className="w-10 h-px bg-amber-500" />
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">
                    {genre.count} Editions
                  </span>
                </div>

                <h3 className="text-5xl text-white font-serif mb-6">
                  {genre.name}
                </h3>

                <div className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  <span>Enter Vault</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <FiArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <button className="group flex items-center gap-4 mx-auto text-[#3E2723] font-bold text-xs uppercase tracking-[0.3em]">
            <FiBookOpen size={18} className="text-amber-600" />
            <span className="border-b-2 border-transparent group-hover:border-amber-600 transition-all">
              Request a New Category
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularGenres;
