import React from "react";
import { FiArrowUpRight, FiSearch, FiDivide, FiHash } from "react-icons/fi";
import useTitle from "../components/useTitle";

const Collections = () => {
  useTitle("Collections");
  const collections = [
    {
      id: "01",
      title: "The Noir Archive",
      subtitle: "Mystery & Suspense",
      description:
        "A shadowy descent into compelling crime fiction and psychological tension.",
      count: "42",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200",
    },
    {
      id: "02",
      title: "Odysseys & Myth",
      subtitle: "Ancient Classics",
      description:
        "Ancient tales of gods and heroes, reimagined for the modern seeker.",
      count: "28",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200",
    },
    {
      id: "03",
      title: "Modern Solitude",
      subtitle: "Contemporary",
      description:
        "Quiet intricacies of human connection in the twenty-first century.",
      count: "35",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
    },
    {
      id: "04",
      title: "Visions of Future",
      subtitle: "Speculative Sci-Fi",
      description: "Architectural blueprints of worlds yet to be imagined.",
      count: "19",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    },
    {
      id: "05",
      title: "The Stoic Path",
      subtitle: "Philosophy",
      description:
        "Rationality and resilience found within the great classical texts.",
      count: "12",
      image:
        "https://images.unsplash.com/photo-1543004218-ee14110497f8?q=80&w=1200",
    },
    {
      id: "06",
      title: "Wilderness Tales",
      subtitle: "Nature & Travel",
      description:
        "Journeys through the untamed landscapes of the global south.",
      count: "24",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBF9] text-[#2C1B18] pt-32 pb-40">
      <div className="max-w-350 mx-auto px-6 sm:px-12">
        {/* --- 1. MODERNIST MINIMAL HEADER --- */}
        <header className="flex flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-amber-900/40" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-900">
                Archive Index 2024
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-serif leading-[1.1] tracking-tighter">
              Curated{" "}
              <span className="italic font-light text-stone-300">Series.</span>
            </h1>
          </div>

          <div className="lg:text-right space-y-4">
            <p className="text-xs font-medium text-stone-400 uppercase tracking-widest">
              Total Curation
            </p>
            <p className="text-4xl font-serif italic leading-none">
              160 Editions
            </p>
          </div>
        </header>

        {/* --- 2. ASYMMETRIC GALLERY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {collections.map((item, idx) => (
            <article
              key={item.id}
              className={`group flex flex-col ${idx % 2 !== 0 ? "lg:mt-20" : ""}`}
            >
              {/* Image with Modern Masking */}
              <div className="relative aspect-10/13 w-full overflow-hidden bg-stone-100 rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Floating Meta Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <FiHash size={10} className="text-amber-900" />
                  <span className="text-[9px] font-bold tracking-widest">
                    {item.id}
                  </span>
                </div>
              </div>

              {/* Text: Modern Minimalist Layout */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-900/60">
                    {item.subtitle}
                  </span>
                  <span className="text-[10px] font-serif italic text-stone-400">
                    {item.count} Vol.
                  </span>
                </div>

                <div className="h-px w-full bg-stone-100 group-hover:bg-amber-900/20 transition-colors" />

                <div className="space-y-2">
                  <h2 className="text-2xl font-serif leading-none tracking-tight group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-[13px] text-stone-500 font-light leading-relaxed max-w-[90%]">
                    {item.description}
                  </p>
                </div>

                <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] pt-2">
                  <span>Explore Series</span>
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* --- 3. NEWSLETTER/CONTACT (MODERNIST FOOTER) --- */}
        <footer className="mt-60 border-t border-stone-200 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 bg-[#2C1B18] text-[#FBFBF9] p-12 md:p-20 rounded-sm shadow-2xl overflow-hidden relative">
            {/* Visual Flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-900/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <div className="relative z-10 max-w-lg text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif italic mb-4">
                Request a Consultation
              </h3>
              <p className="text-sm font-light text-stone-300 leading-relaxed">
                Looking for a specific edition or building a private library?
                Our librarians are available for one-on-one sourcing.
              </p>
            </div>

            <button className="relative z-10 flex items-center gap-4 bg-[#FBFBF9] text-[#2C1B18] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-50 transition-colors shrink-0">
              Contact Librarian
              <FiArrowUpRight size={16} />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Collections;
