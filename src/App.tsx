import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top with a slight delay for better UX
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

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
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] font-body">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/our-story" element={<About />} />
          <Route path="/scent-guide" element={<ScentGuide />} />
          <Route path="/gift-finder" element={<GiftFinder />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}