import React, { useEffect } from "react";
import { FiArrowLeft, FiLock, FiPackage, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useTitle from "../components/useTitle";

const PolicySection = ({ title, description, items }) => (
  <div className="group space-y-6 py-12 border-b border-[#3E2723]/10 last:border-0">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-serif text-[#3E2723] group-hover:text-amber-900 transition-colors">
          {title}
        </h2>
        <p className="text-sm text-[#A1887F] font-sans leading-relaxed">
          {description}
        </p>
      </div>
      <div className="md:col-span-2 space-y-6">
        {items?.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-amber-800/80">
              {item.subtitle}
            </h3>
            <p className="text-[#3E2723]/70 font-sans leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PrivacyAndPolicy = () => {
  useTitle("Privacy & Policy");
  const navigate = useNavigate();

  // Ensure page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#3E2723] selection:bg-amber-100">
      {/* Navigation */}
      <nav className="px-6 py-8 max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="p-2 hover:bg-amber-50 rounded-full transition-colors"
        >
          <FiArrowLeft size={20} />
        </button>
        <div className="text-center">
          <h1 className="font-serif italic text-2xl">The Archive</h1>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A1887F]">
            Policies & Transparency
          </p>
        </div>
        <div className="w-10" />
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-32">
        {/* Intro */}
        <div className="mb-20 space-y-4 max-w-2xl">
          <p className="text-amber-900 font-bold text-sm tracking-widest uppercase">
            Privacy First.
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif leading-tight">
            We value your literary journey as much as your personal data.
          </h2>
        </div>

        {/* Policy Content */}
        <div className="border-t-2 border-[#3E2723]">
          <PolicySection
            title="Privacy Policy"
            description="How we handle your digital footprint within our collection."
            items={[
              {
                subtitle: "Data Collection",
                content:
                  "We collect only what is necessary: your shipping address for physical deliveries, and your email for order updates. We do not track your reading habits for third-party resale.",
              },
              {
                subtitle: "Cookie Usage",
                content:
                  "We use 'functional cookies' to remember your cart and 'aesthetic cookies' to ensure the site's typography renders correctly on your device.",
              },
            ]}
          />

          <PolicySection
            title="Shipping Policy"
            description="The logistics of moving stories from our shelves to yours."
            items={[
              {
                subtitle: "The Handling Process",
                content:
                  "Each book is wrapped in acid-free paper and shipped in reinforced, sustainable packaging to prevent corner-dents and spine damage.",
              },
              {
                subtitle: "Global Reach",
                content:
                  "We ship internationally. Please note that custom duties for rare editions are the responsibility of the collector upon arrival in the destination country.",
              },
            ]}
          />

          <PolicySection
            title="Exchange Policy"
            description="Our commitment to the quality of your personal library."
            items={[
              {
                subtitle: "The 14-Day Grace Period",
                content:
                  "If a volume doesn't meet your expectations, you may initiate an exchange within 14 days. Items must be in their original 'Unread' condition.",
              },
            ]}
          />
        </div>

        {/* Security Badge Footer */}
        <footer className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 bg-[#3E2723] text-[#FCFBF8] p-12 rounded-sm shadow-xl">
          <div className="flex flex-col items-center text-center space-y-3">
            <FiLock className="text-amber-400" size={24} />
            <h4 className="font-serif text-lg">Secure Payments</h4>
            <p className="text-xs text-[#FCFBF8]/60">256-bit SSL Encryption</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <FiShield className="text-amber-400" size={24} />
            <h4 className="font-serif text-lg">Buyer Protection</h4>
            <p className="text-xs text-[#FCFBF8]/60">
              Verified Storefront 2026
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <FiPackage className="text-amber-400" size={24} />
            <h4 className="font-serif text-lg">Eco-Packaging</h4>
            <p className="text-xs text-[#FCFBF8]/60">
              100% Recyclable Materials
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PrivacyAndPolicy;
