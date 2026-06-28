import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import CollectionSection from "./components/home/CollectionSection";
import OurStorySection from "./components/home/OurStorySection";
import PersonalServiceSection from "./components/home/PersonalServiceSection";
import Fragrances from "./pages/Fragrances";
import OurStory from "./pages/OurStory";
import ScentGuide from "./pages/ScentGuide";
import Contact from "./pages/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import TestimonialsSection from "./components/home/TestimonialsSection";
import NewsletterSignup from "./components/NewsletterSignup";
import FAQ from "./components/FAQ";
import BestSellersSection from "./components/home/BestSellersSection";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/scent-guide" element={<ScentGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}