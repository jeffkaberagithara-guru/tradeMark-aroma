import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import HeroSection from "./components/home/HeroSection";
import CollectionSection from "./components/home/CollectionSection";
import BestSellersSection from "./components/home/BestSellersSection";
import OurStorySection from "./components/home/OurStorySection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import PersonalServiceSection from "./components/home/PersonalServiceSection";
import NewsletterSignup from "./components/NewsletterSignup";
import Fragrances from "./pages/Fragrances";
import About from "./pages/About";
import ScentGuide from "./pages/ScentGuide";
import Contact from "./pages/Contact";
import FAQ from "./components/FAQ";
import GiftFinder from "./components/GiftFinder";
import NotFound from "./pages/NotFound";

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-[#2A2519] border-t-[#C9A94A] animate-spin" />
      <p className="font-body text-[#888888] text-sm tracking-[0.2em] uppercase animate-pulse">
        Loading...
      </p>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#C9A94A] animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  </div>
);

// Page Transition Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, key]);

  return null;
}

function Home() {
  return (
    <div className="bg-[#0B0B0B]">
      <HeroSection />
      <CollectionSection />
      <BestSellersSection />
      <OurStorySection />
      <TestimonialsSection />
      <PersonalServiceSection />
      <NewsletterSignup />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] font-body">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/fragrances"
              element={
                <PageTransition>
                  <Fragrances />
                </PageTransition>
              }
            />
            <Route
              path="/our-story"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/scent-guide"
              element={
                <PageTransition>
                  <ScentGuide />
                </PageTransition>
              }
            />
            <Route
              path="/gift-finder"
              element={
                <PageTransition>
                  <GiftFinder />
                </PageTransition>
              }
            />
            <Route
              path="/faq"
              element={
                <PageTransition>
                  <FAQ />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}