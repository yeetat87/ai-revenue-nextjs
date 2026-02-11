"use client";

import { useState, useEffect } from "react";
import { useScrollRevealAll } from "@/hooks/useScrollReveal";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import StickyHeader from "@/components/StickyHeader";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Video from "@/components/Video";
import Shift from "@/components/Shift";
import Trainer from "@/components/Trainer";
import Testimonials from "@/components/Testimonials";
import Outcomes from "@/components/Outcomes";
import WhoIsFor from "@/components/WhoIsFor";
import Guarantee from "@/components/Guarantee";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import { ScrollToTop, MobileCTA } from "@/components/ScrollToTop";

const GlowSep = () => <div className="glow-sep" />;

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Directly redirect to Stripe instead of opening modal
  const openCheckout = () => {
    // Using the link from CheckoutModal
    window.open("https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE", "_blank");
  };

  const closeCheckout = () => setCheckoutOpen(false);

  useScrollRevealAll();
  useTiltEffect();

  useEffect(() => {
    const glows = document.querySelectorAll(".glow-sep");
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          glows.forEach((g) => {
            const rect = g.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const progress =
                (window.innerHeight - rect.top) /
                (window.innerHeight + rect.height);
              g.style.opacity = Math.min(1, progress * 2);
              g.style.transform = `scaleX(${0.3 + progress * 0.7})`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <StickyHeader onCheckout={openCheckout} />
      <Ticker />
      <Hero onCheckout={openCheckout} />
      <Problem onCheckout={openCheckout} />
      <Video />
      <GlowSep />
      <Shift />
      <GlowSep />
      <Trainer />
      <GlowSep />
      <Testimonials />
      <Outcomes />
      <WhoIsFor />
      <GlowSep />
      <Guarantee />
      <Pricing onCheckout={openCheckout} />
      <Ticker
        items={[
          "THE AI REVENUE SYSTEM",
          "◆",
          "30-DAY MONEY-BACK GUARANTEE",
          "◆",
          "INSTANT ACCESS · SELF-PACED",
          "◆",
          "FROM BUILDER TO EARNER",
          "◆",
        ]}
      />
      <FAQ />
      <GlowSep />
      <FinalCTA onCheckout={openCheckout} />
      <Footer />
      <CheckoutModal isOpen={checkoutOpen} onClose={closeCheckout} />
      <ScrollToTop />
      <MobileCTA onCheckout={openCheckout} />
    </>
  );
}
