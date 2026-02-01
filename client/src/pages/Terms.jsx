import React from "react";
import { FiShield, FiTruck, FiRefreshCw, FiLock } from "react-icons/fi";
import useTitle from "../components/useTitle";

const Section = ({ icon: Icon, title, children }) => (
  <section className="py-8 border-b border-[#3E2723]/10">
    <div className="flex items-start gap-4">
      <div className="mt-1 p-2 bg-amber-50 rounded-lg text-amber-900">
        <Icon size={20} />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-[#3E2723]">{title}</h2>
        <div className="text-[#3E2723]/70 leading-relaxed font-sans space-y-3">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const Terms = () => {
  useTitle("Terms of Service");
  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#3E2723] selection:bg-amber-100">
      <main className="max-w-3xl mx-auto px-6 py-32">
        {/* Hero Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-[#A1887F] font-sans tracking-widest uppercase text-[10px] font-black">
            Last Updated: January 2026 • Revision 1.04
          </p>
          <div className="mt-8 h-px w-24 bg-amber-900/20 mx-auto" />
        </header>

        {/* Intro */}
        <p className="text-lg text-[#3E2723]/80 font-serif italic mb-12 text-center">
          "Welcome to our collection. By engaging with our library, you agree to
          respect the craft, the authors, and the community we've built here."
        </p>

        {/* Content Sections */}
        <div className="space-y-4">
          <Section icon={FiShield} title="Usage & Intellectual Property">
            <p>
              All content hosted on this platform—including typography, book
              descriptions, and high-fidelity artwork—remains the exclusive
              property of our curators and respective authors.
            </p>
            <p>
              You are granted a personal, non-commercial license to browse our
              editions. Reproduction of any digital assets without express
              written consent is strictly prohibited.
            </p>
          </Section>

          <Section icon={FiTruck} title="Shipping & Rare Editions">
            <p>
              We treat every shipment like a delicate artifact. Standard
              delivery typically arrives within 5-7 business days.
            </p>
            <p>
              For <strong>Collector's Editions</strong>, please allow an
              additional 3 days for custom archival packaging and insurance
              verification.
            </p>
          </Section>

          <Section icon={FiRefreshCw} title="Returns & Exchanges">
            <p>
              If a book arrives with damage that affects its legibility or
              archival value, we offer a 14-day return window.
            </p>
            <p>
              Please note that "Digital Previews" and "Limited First Pressings"
              are final sale due to their unique nature and limited
              availability.
            </p>
          </Section>

          <Section icon={FiLock} title="Privacy & Security">
            <p>
              Your reading habits are your own. We encrypt all transactional
              data and never share your personal library information with
              third-party advertisers.
            </p>
            <p>
              We use secure, industry-standard protocols to ensure your
              financial details remain as safe as a locked vault.
            </p>
          </Section>
        </div>

        {/* Footer Note */}
        <footer className="mt-20 p-8 bg-white border border-[#3E2723]/5 rounded-sm text-center">
          <p className="text-sm text-[#3E2723]/60 mb-4">
            Have questions regarding our policies?
          </p>
          <a
            href="mailto:legal@yourbookstore.com"
            className="text-amber-900 font-bold border-b-2 border-amber-900/10 hover:border-amber-900 transition-all pb-1"
          >
            deerbooks@archive-editions.com
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Terms;
