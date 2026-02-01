import React from "react";
import { FiArrowRight, FiTarget, FiHash, FiShield } from "react-icons/fi";
import useTitle from "../components/useTitle";

const About = () => {
  useTitle("About Us");
  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-amber-100">
      {/* --- HERO: THE INTRO --- */}
      <section className="max-w-5xl mx-auto pt-32 md:pt-48 px-6">
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-amber-600 font-mono text-[10px] uppercase tracking-[0.4em]">
            <FiHash /> Archive Identity
          </div>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tight leading-tight">
            Preserving{" "}
            <span className="italic font-light text-stone-400">Thought</span>,{" "}
            <br />
            one page at a time.
          </h1>
          <p className="max-w-xl text-stone-500 text-lg md:text-xl font-light leading-relaxed">
            The Nexus Archive is a curated sanctuary for the world's most
            significant literature and records, bridging the gap between
            physical history and digital permanence.
          </p>
        </div>
      </section>

      {/* --- CORE STATS --- */}
      <section className="max-w-5xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-stone-100">
        {[
          { label: "Volumes", value: "12.4k" },
          { label: "Archivists", value: "14" },
          { label: "Nodes", value: "08" },
          { label: "Uptime", value: "99.9%" },
        ].map((stat, i) => (
          <div key={i} className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-stone-300">
              {stat.label}
            </p>
            <p className="text-3xl font-serif italic text-stone-900">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      {/* --- THE MISSION: TEXT-HEAVY ELEGANCE --- */}
      <section className="max-w-5xl mx-auto px-6 py-32 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <h2 className="md:col-span-4 text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 pt-2">
            Our Purpose
          </h2>
          <div className="md:col-span-8 space-y-8">
            <h3 className="text-3xl md:text-4xl font-serif leading-snug">
              We believe knowledge shouldn't have an expiration date. Our
              mission is to outpace digital decay and physical erosion.
            </h3>
            <p className="text-stone-500 leading-relaxed font-light">
              By utilizing decentralized storage and high-resolution imaging, we
              ensure that even if a physical library is lost, its contents
              remain accessible to humanity. Every scan we perform is a vote for
              the future.
            </p>
          </div>
        </div>

        {/* FEATURED IMAGE: Minimalist Framing */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-2xl shadow-stone-200/50 group">
          <img
            src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=1600"
            alt="Minimalist Library"
            className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">
              Vault 01 // Main Hall
            </span>
          </div>
        </div>
      </section>

      {/* --- VALUES: ICONIC BLOCKS --- */}
      <section className="max-w-5xl mx-auto px-6 pb-48 grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          {
            icon: <FiTarget />,
            title: "Precision",
            text: "We capture every detail, from the ink bleed to the paper texture.",
          },
          {
            icon: <FiShield />,
            title: "Security",
            text: "End-to-end encryption ensures the archive remains tamper-proof.",
          },
          {
            icon: <FiArrowRight />,
            title: "Vision",
            text: "Building a library that our grandchildren will explore.",
          },
        ].map((item, i) => (
          <div key={i} className="space-y-4 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-amber-50 group-hover:text-amber-600 transition-all duration-500">
              {item.icon}
            </div>
            <h4 className="text-lg font-serif italic">{item.title}</h4>
            <p className="text-sm text-stone-400 font-light leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* --- SIMPLE FOOTER --- */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-stone-100 flex justify-between items-center">
        <p className="text-[10px] font-mono text-stone-300 uppercase tracking-widest">
          Nexus Archive © 2026
        </p>
        <button className="text-[10px] font-black uppercase tracking-widest hover:text-amber-600 transition-colors">
          Join the Collective
        </button>
      </footer>
    </main>
  );
};

export default About;
